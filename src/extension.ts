'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let implementedMethods: string[] = [
        'end',
        'home',
    ];

    let mappedMethods: [string, string][] = [
        //['save', 'workbench.action.files.save'],
    ];

    for (let method of implementedMethods) {
        context.subscriptions.push(
            vscode.commands.registerCommand(`brief.${method}`, async () => { Brief[method](); })
        );
    }

    for (let [local, method] of mappedMethods) {
        vscode.commands.registerCommand(`brief.${local}`, async () => { vscode.commands.executeCommand(method); })
    }

    vscode.window.onDidChangeTextEditorSelection(e => Brief.onDidChangeTextEditorSelection);
}

enum EndKeyState { None = 0, One = 1, Two = 2, Three = 3 };

export class Brief {
    public static async home(): Promise<any> {
        var method = 'Brief.home';
        console.log(method);

        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var posBefore = editor.selection.active;
        console.log(`${method}::posBefore=${JSON.stringify(editor.selection.active)}`)

        // <HOME>
        await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineStart' });
        var pos = editor.selection.active;
        console.log(`${method}::<HOME>after wrappedLineStart:${JSON.stringify(editor.selection.active)}`)

        if (pos.compareTo(posBefore) == 0) {
            // <HOME><HOME>
            await vscode.commands.executeCommand('cursorMove', { to: 'viewPortTop' });
            console.log(`${method}::<HOME><HOME>after viewPortTop:${JSON.stringify(editor.selection.active)}`)
            await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineStart' });
            console.log(`${method}::<HOME><HOME>after wrappedLineStart:${JSON.stringify(editor.selection.active)}`)
            pos = editor.selection.active;

            if (pos.compareTo(posBefore) == 0) {
                // <HOME><HOME><HOME>
                var origin = new vscode.Position(0, 0);
                editor.selection = new vscode.Selection(origin, origin);
                editor.revealRange(new vscode.Range(origin, origin));
                console.log(`${method}::<HOME><HOME><HOME>after editor.selection=new Selection(origin,origin):${JSON.stringify(editor.selection.active)}`)
            }
        }
    }

    private static _lastPos: vscode.Position;
    private static _endKeyState: EndKeyState = EndKeyState.None;

    public static async end(): Promise<any> {
        //TODO: From middle of document
        // 1 <END>  - goes to end of current line
        // 2 <END>  - goes to end of window (but scroll up 1, so current is second last)
        // 3 <HOME> - goes to start of current line (which is now second last)
        // 4 <END>  -  goes to end of current line (second last)
        // 5 <END>  - goes to end of 1 line down since previous "current" has scrolled up by 1.
        // ideally 4 <END> would know is was last considered end of window so 5 <END> would go to end of file
        var method = 'Brief.end';
        console.log(method);

        var editor = vscode.window.activeTextEditor;
        if (!editor)
            return;

        var posBefore = editor.selection.active;
        console.log(`${method}::posBefore=${JSON.stringify(editor.selection.active)};_endKeyState=${EndKeyState[Brief._endKeyState]};_lastPos=${JSON.stringify(Brief._lastPos)}`);

        var hasChanged: boolean = false;
        // <END>
        hasChanged = await this._moveToEndOfCurrentLine(editor);

        if (hasChanged) {
            // Cursor changed positions, we're done
            Brief._lastPos = editor.selection.active;
            Brief._endKeyState = EndKeyState.One;
            console.log(`${method}::<END>_endKeyState=${EndKeyState[Brief._endKeyState]};_lastPos=${JSON.stringify(Brief._lastPos)}`);
            return;
        } else {
            // Didn't move, we must be at least at the end of the line
            //Brief._endKeyState = EndKeyState.One;
        }

        if (Brief._endKeyState == EndKeyState.One) {
            // <END><END>
            hasChanged = await this._moveToEndOfCurrentViewPort(editor);

            if (hasChanged) {
                // Cursor changed positions, we're done
                Brief._lastPos = editor.selection.active;
                Brief._endKeyState = EndKeyState.Two;
                console.log(`${method}::<END><END>_endKeyState=${EndKeyState[Brief._endKeyState]};_lastPos=${JSON.stringify(Brief._lastPos)}`);
                return;
            } else {
                // Didn't move, we must be at least at the end of the line
                Brief._endKeyState = EndKeyState.Two;
            }
        }

        if (Brief._endKeyState == EndKeyState.Two) {
            await Brief._moveToEndOfFile(editor);
            Brief._lastPos = editor.selection.active;
            Brief._endKeyState = EndKeyState.Three;
            console.log(`${method}::<END><END><END>_endKeyState=${EndKeyState[Brief._endKeyState]};_lastPos=${JSON.stringify(Brief._lastPos)}`);
        }
    }

    public static async moveToEndOfFile(): Promise<any> {
        var method = 'Brief.moveToEndOfFile';
        console.log(method);

        var editor = vscode.window.activeTextEditor;
        if (!editor)
            return;

        await Brief._moveToEndOfFile(editor);

        var pos = editor.selection.active;

        Brief._lastPos = pos;
        Brief._endKeyState = EndKeyState.Three;
    }

    public static onDidChangeTextEditorSelection(e: vscode.TextEditorSelectionChangeEvent) {
        var method = 'onDidChangeTextEditorSelection';
        console.log(`${method} (${e})`);
        //TODO: reset Brief._endKeyState and Brief._lastPos?
    }

    private static async _moveToEndOfCurrentLine(editor: vscode.TextEditor): Promise<boolean> {
        var method = 'Brief._moveToEndOfCurrentLine';

        if (!editor)
            return;

        var before = editor.selection.active;
        await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineEnd' });
        var after = editor.selection.active;
        var hasChanged = !before.isEqual(after);

        console.log(`${method}::before=${JSON.stringify(before)};after=${JSON.stringify(after)};hasChanged=${hasChanged}`);

        return hasChanged;
    }

    private static async _moveToEndOfCurrentViewPort(editor: vscode.TextEditor): Promise<boolean> {
        var method = 'Brief._moveToEndOfCurrentViewPort';

        if (!editor)
            return;

        var before = editor.selection.active;
        await vscode.commands.executeCommand('cursorMove', { to: 'viewPortBottom' });
        await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineEnd' });
        var after = editor.selection.active;
        var hasChanged = !before.isEqual(after);

        console.log(`${method}::before=${JSON.stringify(before)};after=${JSON.stringify(after)};hasChanged=${hasChanged}`);

        return hasChanged;
    }

    private static async _moveToEndOfFile(editor: vscode.TextEditor): Promise<boolean> {
        var method = 'Brief._moveToEndOfFile';

        if (!editor)
            return;

        var before = editor.selection.active;

        vscode.commands.executeCommand('cursorBottom');

        // var origin = new vscode.Position(editor.document.lineCount - 1, 0);
        // editor.selection = new vscode.Selection(origin, origin);
        // await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineEnd' });

        // editor.revealRange(new vscode.Range(editor.selection.active, editor.selection.active));

        var after = editor.selection.active;
        var hasChanged = !before.isEqual(after);

        console.log(`${method}::before=${JSON.stringify(before)};after=${JSON.stringify(after)};hasChanged=${hasChanged}`);

        return hasChanged;
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
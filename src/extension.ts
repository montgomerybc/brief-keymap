'use strict';

import * as vscode from 'vscode';
import { SelectionHelper } from "./selection-helper";

export function activate(context: vscode.ExtensionContext) {

    let implementedMethods: string[] = [
        'end',
        'home',
    ];

    let mappedMethods: [string, string, any][] = [
        //['save', 'workbench.action.files.save'],
        ['up5', 'cursorMove', { to: 'up', by: 'wrappedLine', value: 5 }],
        ['down5', 'cursorMove', { to: 'down', by: 'wrappedLine', value: 5 }],
    ];

    for (let method of implementedMethods) {
        context.subscriptions.push(
            vscode.commands.registerCommand(`brief.${method}`, async () => { Brief[method](); })
        );
    }

    for (let [local, method, args] of mappedMethods) {
        vscode.commands.registerCommand(`brief.${local}`, async () => {
            vscode.commands.executeCommand(method, args);
        })
    }

    vscode.window.onDidChangeTextEditorSelection(Brief.onDidChangeTextEditorSelection);
    vscode.workspace.onDidChangeTextDocument(Brief.onDidChangeTextDocument);
    vscode.commands.registerCommand('type', Brief.onType);
}

enum HomeEndKeyStates {
    None,       // Nothing special. Initial state _and_ after pressing anything _other than_ <HOME> or <END>

    MovingBol,  // Immediately after pressing <HOME> for the first time
    Home1,      // Have pressed <HOME> once, currently at the beginning of the line
    MovingBow,  // Immediately after pressing <HOME> for the second time
    Home2,      // Have pressed <HOME> 2 or more times, currently at the beginning of the window or file
    MovingBof,  // Immediately after pressing <HOME> for the third (or more) time

    MovingEol,  // Immediately after pressing <END> for the first time
    End1,       // Have pressed <END> once, currently at the end of the line
    MovingEow,  // Immediately after pressing <END> for the second time
    End2,       // Have pressed <END> 2 or more times, currently at the end of the window or file
    MovingEof,  // Immediately after pressing <END> for the third (or more) time
}

export class Brief {
    public static async handleKeySpace(): Promise<boolean> {
        var method = 'handleKeySpace';
        console.log(method);

        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var pos = editor.selection.active;

        var edit = new vscode.WorkspaceEdit();
        var newSelections = new Array<vscode.Selection>();

        //TODO: what about tabs? do they affect what we have to do for adjusting the selection?
        for (let index in editor.selections) {
            let selection = editor.selections[index];

            //console.log(`${method} !selection.isSingleLine. selection=${JSON.stringify(selection)}. isSingleLine=${selection.isSingleLine}`)

            //TODO: don't invert selection
            if (selection.isSingleLine) {
                let lineNum = selection.start.line;
                let line = editor.document.lineAt(lineNum);

                if (line.range.isEqual(new vscode.Range(selection.start, selection.end))) {
                    Brief.prefixLineWith(lineNum, ' ', edit);

                    selection = SelectionHelper.Extend(selection, { endCharacterFn: c => c + 1 });
                }
            } else {
                for (let lineNum = selection.start.line; lineNum < selection.end.line; lineNum++) {
                    Brief.prefixLineWith(lineNum, ' ', edit);
                }
                if (selection.end.character > 0) {
                    Brief.prefixLineWith(selection.end.line, ' ', edit);
                }
                selection = SelectionHelper.Extend(selection, { startCharacterFn: c => c == 0 ? 0 : c + 1, endCharacterFn: c => c == 0 ? 0 : c + 1 });
            }

            newSelections.push(selection);
        }

        var retval = edit.size > 0;

        vscode.workspace.applyEdit(edit);
        editor.selections = newSelections;

        return retval;
    }

    private static _homeEndKeyState: HomeEndKeyStates = HomeEndKeyStates.None;

    // ```mermaid
    // stateDiagram
    //   start --> start : Δ
    //   start --> moving_bol: <home>
    //   start --> moving_eol: <end>
    //
    //   moving_bol --> moving_bol: 'cursorMove' to 'wrappedLineStart'
    //   moving_bol --> home_1:
    //   moving_bol --> moving_bol : Δ
    //
    //   home_1 --> moving_bow: <home>
    //   home_1 --> moving_eol: <end>
    //   home_1 --> start: Δ
    //
    //   moving_bow --> moving_bow: 'cursorMove' to 'viewPortTop'
    //   moving_bow --> home_2:
    //   moving_bow --> moving_bow : Δ
    //
    //   home_2 --> moving_bof: <home>
    //   home_2 --> moving_eol: <end>
    //   home_2 --> start: Δ
    //
    //   moving_bof --> moving_bof: revealRange 'origin'
    //   %% stay in home_2
    //   moving_bof --> home_2:
    //   moving_bof --> moving_bof : Δ
    //
    //   moving_eol --> moving_eol: 'cursorMove' to 'wrappedLineEnd'
    //   moving_eol --> end_1:
    //   moving_eol --> moving_eol : Δ
    //
    //   end_1 --> moving_bol: <home>
    //   end_1 --> moving_eow: <end>
    //   end_1 --> start: Δ
    //
    //   moving_eow --> moving_eow: 'cursorMove' to 'viewPortBottom'
    //   moving_eow --> end_2:
    //   moving_eow --> moving_eow : Δ
    //
    //   end_2 --> moving_bol: <home>
    //   end_2 --> moving_eof: <end>
    //   end_2 --> start: Δ
    //
    //   moving_eof --> moving_eof: revealRange(eof)
    //   %% stay in end_2
    //   moving_eof --> end_2:
    //   moving_eof --> moving_eof : Δ
    // ```
    public static async home(): Promise<any> {
        var method = 'Brief.home';
        console.log(method);

        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var prev = HomeEndKeyStates.None;
        var gesture = "";

        switch (Brief._homeEndKeyState) {
            case HomeEndKeyStates.None:
            case HomeEndKeyStates.End1:
            case HomeEndKeyStates.End2:
                gesture = "<HOME>";

                console.log(`${method}::${gesture}posBefore=${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.MovingBol;
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);

                await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineStart' });
                console.log(`${method}::${gesture}after wrappedLineStart:${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.Home1
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);
                break;

            case HomeEndKeyStates.Home1:
                gesture = "<HOME><HOME>";

                console.log(`${method}::${gesture}posBefore=${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.MovingBow;
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);

                await vscode.commands.executeCommand('cursorMove', { to: 'viewPortTop' });
                console.log(`${method}::${gesture}after viewPortTop:${JSON.stringify(editor.selection.active)}`);
                await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineStart' });
                console.log(`${method}::${gesture}after wrappedLineStart:${JSON.stringify(editor.selection.active)}`)

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.Home2
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);
                break;

            case HomeEndKeyStates.Home2:
                gesture = "<HOME><HOME><HOME>";

                console.log(`${method}::${gesture}posBefore=${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.MovingBof;
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);

                var origin = new vscode.Position(0, 0);
                editor.selection = new vscode.Selection(origin, origin);
                editor.revealRange(new vscode.Range(origin, origin));
                console.log(`${method}::${gesture}after editor.selection=new Selection(origin,origin):${JSON.stringify(editor.selection.active)}`)

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.Home2
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);

                //TODO: Sometimes we get another onDidChangeTextEditorSelection immediately following this,
                // when normally, we would be already positioned properly.  That has the side effect of
                // transitioning from HomeEndKeyStates.Home2->HomeEndKeyStates.None.  This is odd, but since
                // we're at the top-of-file, we cannot tell.  So nothing to worry about right now
                break;

            case HomeEndKeyStates.MovingBow:
            case HomeEndKeyStates.MovingBol:
            case HomeEndKeyStates.MovingBof:
            case HomeEndKeyStates.MovingEol:
            case HomeEndKeyStates.MovingEow:
            case HomeEndKeyStates.MovingEof:
            default:
                console.log(`${method}::Unexpected state ${HomeEndKeyStates[Brief._homeEndKeyState]}. Leaving as is`);
                break;
        }

        console.log(`${method}::${gesture}posAfter=${JSON.stringify(editor.selection.active)}`);
    }

    public static async end(): Promise<any> {
        var method = 'Brief.end';
        console.log(method);

        var editor = vscode.window.activeTextEditor;
        if (!editor)
            return;

        var prev = HomeEndKeyStates.None;
        var gesture = "";

        switch (Brief._homeEndKeyState) {
            case HomeEndKeyStates.None:
            case HomeEndKeyStates.Home1:
            case HomeEndKeyStates.Home2:
                gesture = "<END>";

                console.log(`${method}::${gesture}posBefore=${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.MovingEol;
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);

                await this._moveToEndOfCurrentLine(editor);
                console.log(`${method}::${gesture}after _moveToEndOfCurrentLine:${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.End1
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);
                break;

            case HomeEndKeyStates.End1:
                gesture = "<END><END>";

                console.log(`${method}::${gesture}posBefore=${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.MovingEow;
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);

                await this._moveToEndOfCurrentViewPort(editor);
                console.log(`${method}::${gesture}after _moveToEndOfCurrentViewPort:${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.End2
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);
                break;

            case HomeEndKeyStates.End2:
                gesture = "<END><END><END>";

                console.log(`${method}::${gesture}posBefore=${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.MovingEof;
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);

                await this._moveToEndOfFile(editor);
                console.log(`${method}::${gesture}after _moveToEndOfFile:${JSON.stringify(editor.selection.active)}`);

                prev = Brief._homeEndKeyState;
                Brief._homeEndKeyState = HomeEndKeyStates.End2
                console.log(`${method}::${gesture}transitioning state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);
                break;

            case HomeEndKeyStates.MovingBow:
            case HomeEndKeyStates.MovingBol:
            case HomeEndKeyStates.MovingBof:
            case HomeEndKeyStates.MovingEol:
            case HomeEndKeyStates.MovingEow:
            case HomeEndKeyStates.MovingEof:
            default:
                console.log(`${method}::Unexpected state ${HomeEndKeyStates[Brief._homeEndKeyState]}. Leaving as is`);
                break;
        }

        console.log(`${method}::${gesture}posAfter=${JSON.stringify(editor.selection.active)}`);
    }

    public static onDidChangeTextEditorSelection(e: vscode.TextEditorSelectionChangeEvent) {
        var method = 'onDidChangeTextEditorSelection';
        console.log(method);

        var prev = Brief._homeEndKeyState;

        switch (Brief._homeEndKeyState) {
            case HomeEndKeyStates.Home1:
            case HomeEndKeyStates.Home2:
            case HomeEndKeyStates.End1:
            case HomeEndKeyStates.End2:
                Brief._homeEndKeyState = HomeEndKeyStates.None;
                console.log(`${method}::transitioned state ${HomeEndKeyStates[prev]}->${HomeEndKeyStates[Brief._homeEndKeyState]}`);
                break;

            case HomeEndKeyStates.None:
            case HomeEndKeyStates.MovingBow:
            case HomeEndKeyStates.MovingBol:
            case HomeEndKeyStates.MovingBof:
            case HomeEndKeyStates.MovingEol:
            case HomeEndKeyStates.MovingEow:
            case HomeEndKeyStates.MovingEof:
            default:
                console.log(`${method}::Leaving state in ${HomeEndKeyStates[Brief._homeEndKeyState]}`);
                break;
        }
    }

    public static onDidChangeTextDocument(e: vscode.TextDocumentChangeEvent) {
        var method = 'onDidChangeTextDocument';
        console.log(method);
        console.log(e);
        //TODO: reset Brief._endKeyState and Brief._lastPos?
    }

    public static async onType(e: any) {
        var method = 'onType';
        console.log(method);
        console.log(e);

        if (e.text == ' ') {
            if (await Brief.handleKeySpace())
                return;
        }
        await vscode.commands.executeCommand('default:type', e);
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

        var after = editor.selection.active;
        var hasChanged = !before.isEqual(after);

        console.log(`${method}::before=${JSON.stringify(before)};after=${JSON.stringify(after)};hasChanged=${hasChanged}`);

        return hasChanged;
    }
    private static prefixLineWith(lineNum: number, text: string, edit: vscode.WorkspaceEdit): void {
        if (!text)
            return;
        if (!vscode.WorkspaceEdit)
            return;

        let startOfLine = new vscode.Position(lineNum, 0);
        edit.insert(vscode.window.activeTextEditor.document.uri, startOfLine, text);
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
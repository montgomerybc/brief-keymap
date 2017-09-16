'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        // vscode.commands.registerCommand('brief.home', () => brief_home)
        vscode.commands.registerCommand('brief.home', async () => { Brief['home'](); })
    )
}

export class Brief {
    public static async home(): Promise<any> {
        console.log('Brief.home');
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var posBefore = editor.selection.active;
        console.log(`posBefore=${JSON.stringify(editor.selection.active)}`)

        // <HOME>
        await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineStart' });
        var pos = editor.selection.active;
        console.log(`<HOME>after wrappedLineStart:${JSON.stringify(editor.selection.active)}`)

        if (pos.compareTo(posBefore) == 0) {
            // <HOME><HOME>
            await vscode.commands.executeCommand('cursorMove', { to: 'viewPortTop' });
            console.log(`<HOME><HOME>after viewPortTop:${JSON.stringify(editor.selection.active)}`)
            await vscode.commands.executeCommand('cursorMove', { to: 'wrappedLineStart' });
            console.log(`<HOME><HOME>after wrappedLineStart:${JSON.stringify(editor.selection.active)}`)
            pos = editor.selection.active;

            if (pos.compareTo(posBefore) == 0) {
                // <HOME><HOME><HOME>
                var origin = new vscode.Position(0, 0);
                editor.selection = new vscode.Selection(origin, origin);
                editor.revealRange(new vscode.Range(origin, origin));
                console.log(`<HOME><HOME><HOME>after editor.selection=new Selection(origin,origin):${JSON.stringify(editor.selection.active)}`)
            }
        }

    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
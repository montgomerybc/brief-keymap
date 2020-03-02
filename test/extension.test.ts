// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

import * as vscode from 'vscode';
import * as myExtension from '../src/extension';
import { join, resolve } from 'path';

const documentName = './the-mysterious-affair-at-styles-by-agatha-christie.txt';
const testDocument = resolve(__dirname, `../../test/${documentName}`);

// function move(line: number, column: number): void;
async function move(line: number, column: number, editor: vscode.TextEditor = null) {
    if (editor === null) {
        editor = vscode.window.activeTextEditor;
    }

    const position = new vscode.Position(line, column);
    editor.selection = new vscode.Selection(position, position);

    await vscode.commands.executeCommand('revealLine', { lineNumber: line-5, at: 'top' });
}

suite("Home Tests", () => {
    setup((done) => {
        console.log("Home Tests/setup");

        closeAll().then(() => {
            vscode.workspace.openTextDocument(testDocument).then(
                (file) => {
                    vscode.window.showTextDocument(file).then(
                        (editor) => {
                            done();
                        }
                        , (reason) => {
                            done(reason);
                        }
                    );
                }
            );
        });
    });

    teardown(async () => {
        console.log("Home Tests/teardown");
        await closeAll();
    });

    test("Pressing <HOME> once, moves to beginning of line", async () => {
        console.log("Home Tests/Pressing <HOME> once, moves to beginning of lineup");

        await move(402, 192);

        await myExtension.Brief.home();

        var pos = vscode.window.activeTextEditor.selection
        assert.equal(402, pos.anchor.line);
        assert.equal(402, pos.active.line);
        assert.equal(0, pos.anchor.character);
        assert.equal(0, pos.active.character);
    });

    test("Pressing <HOME> twice, moves to beginning of window", async () => {
        console.log("Home Tests/Pressing <HOME> twice, moves to beginning of window");

        await move(402, 192);

        var windowPosBefore = (vscode.window.activeTextEditor as any).visibleRanges[0];

        await myExtension.Brief.home();
        await myExtension.Brief.home();

        var pos = vscode.window.activeTextEditor.selection
        assert.equal(pos.anchor.line, windowPosBefore.start.line);
        assert.equal(pos.active.line, windowPosBefore.start.line);
        assert.equal(pos.anchor.character, 0);
        assert.equal(pos.active.character, 0);
    }).timeout(10000);

    test("Pressing <HOME> thrice, moves to beginning of file", async () => {
        console.log("Home Tests/Pressing <HOME> thrice, moves to beginning of file");

        await move(402, 192);

        await myExtension.Brief.home();
        await myExtension.Brief.home();
        await myExtension.Brief.home();

        var pos = vscode.window.activeTextEditor.selection
        assert.equal(pos.anchor.line, 0);
        assert.equal(pos.active.line, 0);
        assert.equal(pos.anchor.character, 0);
        assert.equal(pos.active.character, 0);
    }).timeout(10000);

    async function closeAll(): Promise<void> {
        console.log(`Home Tests/closeAll vscode.window.visibleTextEditors.length=${vscode.window.visibleTextEditors.length}`);
        return new Promise((c, e) => {
            if (vscode.window.visibleTextEditors.length === 0) {
                return c();
            }
            vscode.commands.executeCommand("workbench.action.revertAndCloseActiveEditor").then(() => {
                closeAll().then(() => {
                    c();
                });
            });
        });
    }
});
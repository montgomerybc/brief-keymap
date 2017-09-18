import { Selection } from 'vscode';

export interface ISelectionHelperExtendParms {
    startlineFn?: (n: number) => number,
    startCharacterFn?: (n: number) => number,
    endlineFn?: (n: number) => number,
    endCharacterFn?: (n: number) => number
}

export class SelectionHelper {
    public static Extend(selection: Selection, parms: ISelectionHelperExtendParms): Selection {
        if (!selection)
            return selection;
        if (!parms)
            return selection;

        var startLine = selection.start.line;
        var startChar = selection.start.character;
        var endLine = selection.end.line;
        var endChar = selection.end.character;

        if (parms.startlineFn) {
            startLine = parms.startlineFn(startLine);
        }
        if (parms.startCharacterFn) {
            startChar = parms.startCharacterFn(startChar);
        }

        if (parms.endlineFn) {
            endLine = parms.endlineFn(endLine);
        }
        if (parms.endCharacterFn) {
            endChar = parms.endCharacterFn(endChar);
        }

        if (selection.isReversed)
            return new Selection(endLine, endChar, startLine, startChar);
        else
            return new Selection(startLine, startChar, endLine, endChar);
    }
}
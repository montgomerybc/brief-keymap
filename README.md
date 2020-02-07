# brief-keymap README

This is a brief keymap for Visual Studio Code.

## Contents
TBD

## Requirements
TBD

## Commands By Category
:full_moon: - fully done

:waning_gibbous_moon:

:last_quarter_moon:

:waning_crescent_moon:

:new_moon: - not done

:poodle: - done in a "VS Code" specific way

:construction: - work in progress

:see_no_evil: - not applicable/not necessary

:no_entry: - not possible at this time

### Buffer / File
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Alt` + `-`               |:full_moon:           |Previous buffer                   |x    |x          |         |Brief                                                         |
|`Ctrl` + `-`              |:full_moon:           |Close Buffer                      |x    |x          |         |Brief                                                         |
|`Alt` + `=`               |:full_moon:           |Next buffer                       |     |           |x        |Personal                                                      |
|`Alt` + `B`               |:waning_gibbous_moon: |List of buffers                   |x    |x          |         |Brief                                                         |
|`Alt` + `E`               |:waning_gibbous_moon: |Open file                         |x    |x          |         |Brief                                                         |
|`Alt` + `F`               |:construction:        |Display filename                  |x    |x          |         |Brief                                                         |
|`Alt` + `N`               |:full_moon:           |Next buffer                       |x    |x          |         |Brief                                                         |
|`Alt` + `O`               |:waning_gibbous_moon: |Change output name                |x    |x          |         |Brief                                                         |
|`Alt` + `P`               |:new_moon:            |Print buffer / selection          |x    |x          |         |Brief                                                         |
|`Alt` + `R`               |:new_moon:            |Read file into buffer             |x    |x          |         |Brief                                                         |
|`Alt` + `W`               |:full_moon:           |Save file                         |x    |x          |         |Brief                                                         |
|`Alt` + `W`               |:new_moon:            |Write selection to file           |x    |?          |         |Brief                                                         |

### Cursor Motion/Scrolling
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Ctrl` + `B`              |:new_moon:            |Make current line bottom of window|x    |x          |         |Brief                                                         |
|`Ctrl` + `C`              |:new_moon:            |Center current line in window     |x    |x          |         |Brief                                                         |
|`Ctrl` + `D`              |:new_moon:            |Scroll down 1 line                |x    |x          |         |Brief                                                         |
|`Down`                    |:full_moon:           |Line down                         |x    |x          |         |Brief                                                         |
|`Ctrl` + `E`              |:new_moon:            |Scroll up 1 line                  |x    |x          |         |Brief                                                         |
|`End`                     |:last_quarter_moon:   |End of line                       |x    |x          |         |Brief                                                         |
|`Ctrl` + `End`            |:new_moon:            |Bottom of window                  |x    |x          |         |Brief                                                         |
|`Shift` + `End`           |:new_moon:            |Right window edge                 |x    |x          |         |Brief                                                         |
|`End` + `End`             |:last_quarter_moon:   |Bottom of window                  |x    |x          |         |Brief                                                         |
|`End` + `End` + `End`     |:last_quarter_moon:   |Bottom of file                    |x    |x          |         |Brief                                                         |
|`Alt` + `G`               |:full_moon:           |Go to line (prompt)               |x    |x          |         |Brief                                                         |
|`Home`                    |:full_moon:           |Beginning of line                 |x    |x          |         |Brief                                                         |
|`Ctrl` + `Home`           |:new_moon:            |Top of window                     |x    |x          |         |Brief                                                         |
|`Shift` + `Home`          |:new_moon:            |Left window edge                  |     |x          |         |Codewright                                                    |
|`Home` + `Home`           |:full_moon:           |Top of window                     |x    |x          |         |Brief                                                         |
|`Home` + `Home` + `Home`  |:full_moon:           |Top of file                       |x    |x          |         |Brief                                                         |
|`Left`                    |:full_moon:           |Column left                       |x    |x          |         |Brief                                                         |
|`Alt` + `Shift` + `Left`  |:new_moon:            |Previous Document Position (Back) |     |x          |         |Codewright                                                    |
|`Ctrl` + `Left`           |:full_moon:           |Word left                         |x    |x          |         |Brief                                                         |
|`PgDn`                    |:full_moon:           |Page down                         |x    |x          |         |Brief                                                         |
|`Ctrl` + `PgDn`           |:full_moon:           |End of Buffer / Bottom of file    |x    |x          |         |Brief                                                         |
|`PgUp`                    |:full_moon:           |Page up                           |x    |x          |         |Brief                                                         |
|`Ctrl` + `PgUp`           |:new_moon:            |Top of file                       |x    |x          |         |Brief                                                         |
|`Right`                   |:full_moon:           |Column right                      |x    |x          |         |Brief                                                         |
|`Alt` + `Shift` + `Right` |:new_moon:            |Next Document Position (Back)     |     |x          |         |Codewright                                                    |
|`Ctrl` + `Right`          |:full_moon:           |Word right                        |x    |x          |         |Brief                                                         |
|`Ctrl` + `T`              |:new_moon:            |Make current line top of window   |x    |x          |         |Brief                                                         |
|`Up`                      |:full_moon:           |Line up                           |x    |x          |         |Brief                                                         |

### Editing
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Ctrl` + `<`              |:waning_crescent_moon:|Slide-out Prompt                  |     |x          |         |Codewright                                                    |
|`Ctrl` + `>`              |:waning_crescent_moon:|Slide-in Prompt                   |     |x          |         |Codewright                                                    |
|`Bksp`                    |:full_moon:           |Delete character to left          |x    |x          |         |Brief                                                         |
|`Alt` + `Bksp`            |:full_moon:           |Delete next word                  |     |x          |         |Codewright                                                    |
|`Ctrl` + `Bksp`           |:full_moon:           |Delete previous word              |x    |x          |         |Brief                                                         |
|`Shift` + `Bksp`          |:full_moon:           |Delete character to left          |     |x          |         |Codewright (same as `Bksp`)                                   |
|`Alt` + `D`               |:full_moon:           |Delete line                       |x    |x          |         |Brief                                                         |
|`Del`                     |:full_moon:           |Delete character                  |x    |x          |         |Brief                                                         |
|`Enter`                   |:full_moon:           |Enter                             |x    |x          |         |Brief                                                         |
|`Ctrl` + `Enter`          |:full_moon:           |Insert line below                 |x    |x          |         |Brief                                                         |
|`Alt` + `K`               |:full_moon:           |Delete to end of line             |x    |x          |         |Brief                                                         |
|`Ctrl` + `K`              |:full_moon:           |Delete to start of line           |     |x          |         |Codewright                                                    |
|`Numpad *`                |:full_moon:           |Undo                              |x    |x          |         |Brief                                                         |
|`Alt` + `Q`               |:new_moon:            |Quoted Insert                     |x    |x          |         |Brief                                                         |
|`Space`                   |:full_moon:           |Space / Indent block by space     |x    |x          |         |Brief                                                         |
|`Shift` + `Space`         |:new_moon:            |Unindent block by space           |     |           |         |**additional command. TODO tie to setting*                    |
|`Tab`                     |:full_moon:           |Tab / Indent block by tab         |x    |x          |         |Brief                                                         |
|`Shift` + `Tab`           |:full_moon:           |Back Tab / Unindent block by tab  |x    |x          |         |Brief                                                         |
|`Alt` + `U`               |:full_moon:           |Undo                              |x    |x          |         |Brief                                                         |
|`Ctrl` + `U`              |:new_moon:            |Redo                              |x    |x          |         |Brief                                                         |
|`Alt` + `Y`               |:full_moon:           |Redo                              |     |x          |         |Codewright                                                    |

### Scrap/Clipboard
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Ctrl` + `/`              |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |Codewright                                                    |
|`Shift` + `Del`           |:full_moon:           |Cut                               |     |x          |         |Codewright (same as `Numpad -`)                               |
|`Ins`                     |:full_moon:           |Paste                             |x    |x          |         |Brief                                                         |
|`Ctrl` + `Ins`            |:full_moon:           |Copy                              |     |x          |         |Codewright (same as `Numpad +`)                               |
|`Ctrl` + `Numpad /`       |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |Codewright                                                    |
|`Numpad -`                |:full_moon:           |Cut                               |x    |x          |         |Brief                                                         |
|`Numpad +`                |:full_moon:           |Copy                              |x    |x          |         |Brief                                                         |

### Search/Replace
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`F5`                      |:waning_gibbous_moon: |Search                            |x    |x          |         |Brief                                                         |
|`Alt` + `F5`              |:new_moon:            |Reverse Search                    |x    |x          |         |Brief                                                         |
|`Ctrl` + `F5`             |:new_moon:            |Ignore case on/off                |x    |x          |         |Brief                                                         |
|`Shift` + `F5`            |:waning_gibbous_moon: |Search again                      |x    |x          |         |Brief *use editor.action.addSelectionToNextFindMatch instead?*|
|`F6`                      |:waning_gibbous_moon: |Replace                           |x    |x          |         |Brief                                                         |
|`Alt` + `F6`              |:new_moon:            |Reverse Replace                   |x    |x          |         |Brief                                                         |
|`Ctrl` + `F6`             |:new_moon:            |Regular expressions on/off        |x    |x          |         |Brief                                                         |
|`Shift` + `F6`            |:waning_gibbous_moon: |Replace again                     |x    |x          |         |Brief                                                         |
|`Ctrl` + `Shift` + `K`    |:new_moon:            |Kiss matching brace               |     |x          |         |Codewright                                                    |
|`Ctrl` + `Shift` + `M`    |:new_moon:            |Multi-buffer Search again         |     |           |         |??                                                            |
|`Ctrl` + `Shift` + `Q`    |:new_moon:            |Quick search for word             |     |x          |         |Codewright                                                    |
|`Alt` + `S`               |:waning_gibbous_moon: |Search                            |x    |x          |         |Brief                                                         |
|`Alt` + `T`               |:waning_gibbous_moon: |Replace                           |x    |x          |         |Brief                                                         |

### Selections/Marks
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Alt` + _number_          |:new_moon:            |Set mark *number*                 |x    |x          |         |Brief. Keypad numbers only?  Not keypad?                      |
|`Alt` + `A`               |:new_moon:            |Begin selection (exclusive)       |x    |x          |         |Brief                                                         |
|`Ctrl` + `A`              |:new_moon:            |Close/open Selection              |     |x          |         |Codewright                                                    |
|`Alt` + `C`               |:new_moon:            |Begin selection (column)          |x    |x          |         |Brief                                                         |
|`Alt` + `J` _number_      |:new_moon:            |Go to mark (prompt)               |x    |x          |         |Brief                                                         |
|`Alt` + `L`               |:new_moon:            |Begin selection (line)            |x    |x          |         |Brief                                                         |
|`Alt` + `M`               |:new_moon:            |Begin selection (inclusive)       |x    |x          |         |Brief                                                         |
|`Numpad` _number_         |:new_moon:            |Set mark _number_                 |     |           |x        |Personal                                                      |
|`Ctrl` + `Numpad` _number_|:new_moon:            |Go to mark _number_               |     |           |x        |Personal                                                      |

### System
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Ctrl` + `Shift` + `A`    |:new_moon:            |Text Mode / Deselect / Unfold     |     |x          |         |Codewright                                                    |
|`Ctrl` + `Break`          |:see_no_evil:         |Halt                              |x    |           |         |Brief                                                         |
|`Shift` + `Enter`         |:new_moon:            |Expand/Collapse                   |     |x          |         |Codewright                                                    |
|`Esc`                     |:new_moon:            |Text Mode / Deselect / Unfold     |x    |x          |         |Brief                                                         |
|`Shift` + `F1`            |:see_no_evil:         |CodeSense Hover Tooltip           |     |x          |         |Codewright                                                    |
|`F10`                     |:new_moon:            |API interface / Execute Macro     |x    |x          |         |Brief (same as VSCode F1?)                                    |
|`Alt` + `F10`             |:new_moon:            |Compile buffer                    |x    |x          |         |Brief                                                         |
|`Ctrl` + `F4`             |:new_moon:            |Close Window                      |     |x          |         |Codewright just window                                        |
|`F7`                      |:new_moon:            |Record keys toggle                |x    |x          |         |Brief                                                         |
|`Alt` + `F7`              |:new_moon:            |Load recording file               |x    |x          |         |Brief                                                         |
|`Shift` + `F7`            |:new_moon:            |Pause Macro                       |x    |?          |         |Brief                                                         |
|`F8`                      |:new_moon:            |Playback keystrokes               |x    |x          |         |Brief                                                         |
|`Alt` + `F8`              |:new_moon:            |Write recording file              |     |x          |         |Codewright                                                    |
|`F9`                      |:see_no_evil:         |Load Macro File / Load DLL        |x    |x          |         |Brief                                                         |
|`Shift` + `F9`            |:see_no_evil:         |Delete Macro File / Unload DLL    |x    |x          |         |Brief                                                         |
|`Ctrl` + `G`              |:waning_gibbous_moon: |Display routines                  |     |x          |         |Codewright (popup? Fold?)                                     |
|`Alt` + `H`               |:new_moon:            |Help                              |x    |           |         |Brief                                                         |
|`Ctrl` + `Shift` + `H`    |:new_moon:            |Binary/Hex view                   |     |x          |         |Codewright                                                    |
|`Alt` + `I`               |:new_moon:            |Insert mode on/off                |x    |x          |         |Brief                                                         |
|`Ctrl` + `N`              |:new_moon:            |Next error                        |x    |x          |         |Brief                                                         |
|`Ctrl` + `P`              |:new_moon:            |Show errors                       |x    |x          |         |Brief                                                         |
|`Ctrl` + `R`              |:new_moon:            |Repeat key action                 |x    |x          |         |Brief                                                         |
|`Alt` + `V`               |:new_moon:            |Print version                     |x    |x          |         |Brief                                                         |
|`Ctrl` + `W`              |:see_no_evil:         |Backups on/off                    |x    |x          |         |Brief                                                         |
|`Alt` + `X`               |:new_moon:            |Quit with prompt                  |x    |x          |         |Brief                                                         |
|`Ctrl` + `X`              |:new_moon:            |Quit with write                   |x    |x          |         |Brief                                                         |
|`Alt` + `Z`               |:new_moon:            |Suspend Brief / Shell             |x    |x          |         |Brief n/a.  Codewright?                                       |

### Window
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Ctrl` + `Shift` + `C`    |:new_moon:            |Compact Mode                      |     |x          |         |Codewright                                                    |
|`Alt` + `Shift` + `Down`  |:new_moon:            |Next split window pane            |     |x          |         |Codewright                                                    |
|`Shift` + `Down`          |:new_moon:            |Select window below               |     |x          |         |Codewright                                                    |
|`F1`                      |:new_moon:            |Move to window                    |x    |x          |         |Brief                                                         |
|`Alt` + `F1`              |:new_moon:            |Borders on/off                    |x    |x          |         |Brief. Codewright: CodeSense parameter                        |
|`F2`                      |:new_moon:            |Resize window                     |x    |x          |         |Brief                                                         |
|`Alt` + `F2`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |Brief                                                         |
|`F3`                      |:new_moon:            |Split window                      |x    |x          |         |Brief                                                         |
|`F4`                      |:new_moon:            |Delete window                     |x    |x          |         |Brief                                                         |
|`Shift` + `Left`          |:new_moon:            |Select window at left             |     |x          |         |Codewright                                                    |
|`Shift` + `Right`         |:new_moon:            |Select window at right            |     |x          |         |Codewright                                                    |
|`Alt` + `Shift` + `Up`    |:new_moon:            |Previous split window pane        |     |x          |         |Codewright                                                    |
|`Shift` + `Up`            |:new_moon:            |Select window above               |     |x          |         |Codewright                                                    |
|`Ctrl` + `Z`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |Brief                                                         |

## Commands By Key
:full_moon: - fully done

:waning_gibbous_moon:

:last_quarter_moon:

:waning_crescent_moon:

:new_moon: - not done

:poodle: - done in a "VS Code" specific way

:construction: - work in progress

:see_no_evil: - not applicable/not necessary

:no_entry: - not possible at this time

|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                                         |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|--------------------------------------------------------------|
|`Alt` + _number_          |:new_moon:            |Set mark *number*                 |x    |x          |         |Brief. Keypad numbers only?  Not keypad?                      |
|`Ctrl` + `/`              |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |Codewright                                                    |
|`Alt` + `-`               |:full_moon:           |Previous buffer                   |x    |x          |         |Brief                                                         |
|`Ctrl` + `-`              |:full_moon:           |Close Buffer                      |x    |x          |         |Brief                                                         |
|`Ctrl` + `<`              |:waning_crescent_moon:|Slide-out Prompt                  |     |x          |         |Codewright                                                    |
|`Alt` + `=`               |:full_moon:           |Next buffer                       |     |           |x        |Personal                                                      |
|`Ctrl` + `>`              |:waning_crescent_moon:|Slide-in Prompt                   |     |x          |         |Codewright                                                    |
|`Alt` + `A`               |:new_moon:            |Begin selection (exclusive)       |x    |x          |         |Brief                                                         |
|`Ctrl` + `A`              |:new_moon:            |Close/open Selection              |     |x          |         |Codewright                                                    |
|`Ctrl` + `Shift` + `A`    |:new_moon:            |Text Mode / Deselect / Unfold     |     |x          |         |Codewright                                                    |
|`Alt` + `B`               |:waning_gibbous_moon: |List of buffers                   |x    |x          |         |Brief                                                         |
|`Ctrl` + `B`              |:new_moon:            |Make current line bottom of window|x    |x          |         |Brief                                                         |
|`Bksp`                    |:full_moon:           |Delete character to left          |x    |x          |         |Brief                                                         |
|`Alt` + `Bksp`            |:full_moon:           |Delete next word                  |     |x          |         |Codewright                                                    |
|`Ctrl` + `Bksp`           |:full_moon:           |Delete previous word              |x    |x          |         |Brief                                                         |
|`Shift` + `Bksp`          |:full_moon:           |Delete character to left          |     |x          |         |Codewright (same as `Bksp`)                                   |
|`Ctrl` + `Break`          |:see_no_evil:         |Halt                              |x    |           |         |Brief                                                         |
|`Alt` + `C`               |:new_moon:            |Begin selection (column)          |x    |x          |         |Brief                                                         |
|`Ctrl` + `C`              |:new_moon:            |Center current line in window     |x    |x          |         |Brief                                                         |
|`Ctrl` + `Shift` + `C`    |:new_moon:            |Compact Mode                      |     |x          |         |Codewright                                                    |
|`Alt` + `D`               |:full_moon:           |Delete line                       |x    |x          |         |Brief                                                         |
|`Ctrl` + `D`              |:new_moon:            |Scroll down 1 line                |x    |x          |         |Brief                                                         |
|`Del`                     |:full_moon:           |Delete character                  |x    |x          |         |Brief                                                         |
|`Shift` + `Del`           |:full_moon:           |Cut                               |     |x          |         |Codewright (same as `Numpad -`)                               |
|`Down`                    |:full_moon:           |Line down                         |x    |x          |         |Brief                                                         |
|`Alt` + `Shift` + `Down`  |:new_moon:            |Next split window pane            |     |x          |         |Codewright                                                    |
|`Shift` + `Down`          |:new_moon:            |Select window below               |     |x          |         |Codewright                                                    |
|`Alt` + `E`               |:waning_gibbous_moon: |Open file                         |x    |x          |         |Brief                                                         |
|`Ctrl` + `E`              |:new_moon:            |Scroll up 1 line                  |x    |x          |         |Brief                                                         |
|`End`                     |:last_quarter_moon:   |End of line                       |x    |x          |         |Brief                                                         |
|`Ctrl` + `End`            |:new_moon:            |Bottom of window                  |x    |x          |         |Brief                                                         |
|`Shift` + `End`           |:new_moon:            |Right window edge                 |x    |x          |         |Brief                                                         |
|`End` + `End`             |:last_quarter_moon:   |Bottom of window                  |x    |x          |         |Brief                                                         |
|`End` + `End` + `End`     |:last_quarter_moon:   |Bottom of file                    |x    |x          |         |Brief                                                         |
|`Enter`                   |:full_moon:           |Enter                             |x    |x          |         |Brief                                                         |
|`Ctrl` + `Enter`          |:full_moon:           |Insert line below                 |x    |x          |         |Brief                                                         |
|`Shift` + `Enter`         |:new_moon:            |Expand/Collapse                   |     |x          |         |Codewright                                                    |
|`Esc`                     |:new_moon:            |Text Mode / Deselect / Unfold     |x    |x          |         |Brief                                                         |
|`Alt` + `F`               |:construction:        |Display filename                  |x    |x          |         |Brief                                                         |
|`F1`                      |:new_moon:            |Move to window                    |x    |x          |         |Brief                                                         |
|`Alt` + `F1`              |:new_moon:            |Borders on/off                    |x    |x          |         |Brief. Codewright: CodeSense parameter                        |
|`Shift` + `F1`            |:see_no_evil:         |CodeSense Hover Tooltip           |     |x          |         |Codewright                                                    |
|`F10`                     |:new_moon:            |API interface / Execute Macro     |x    |x          |         |Brief (same as VSCode F1?)                                    |
|`Alt` + `F10`             |:new_moon:            |Compile buffer                    |x    |x          |         |Brief                                                         |
|`F2`                      |:new_moon:            |Resize window                     |x    |x          |         |Brief                                                         |
|`Alt` + `F2`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |Brief                                                         |
|`F3`                      |:new_moon:            |Split window                      |x    |x          |         |Brief                                                         |
|`F4`                      |:new_moon:            |Delete window                     |x    |x          |         |Brief                                                         |
|`Ctrl` + `F4`             |:new_moon:            |Close Window                      |     |x          |         |Codewright just window                                        |
|`F5`                      |:waning_gibbous_moon: |Search                            |x    |x          |         |Brief                                                         |
|`Alt` + `F5`              |:new_moon:            |Reverse Search                    |x    |x          |         |Brief                                                         |
|`Ctrl` + `F5`             |:new_moon:            |Ignore case on/off                |x    |x          |         |Brief                                                         |
|`Shift` + `F5`            |:waning_gibbous_moon: |Search again                      |x    |x          |         |Brief *use editor.action.addSelectionToNextFindMatch instead?*|
|`F6`                      |:waning_gibbous_moon: |Replace                           |x    |x          |         |Brief                                                         |
|`Alt` + `F6`              |:new_moon:            |Reverse Replace                   |x    |x          |         |Brief                                                         |
|`Ctrl` + `F6`             |:new_moon:            |Regular expressions on/off        |x    |x          |         |Brief                                                         |
|`Shift` + `F6`            |:waning_gibbous_moon: |Replace again                     |x    |x          |         |Brief                                                         |
|`F7`                      |:new_moon:            |Record keys toggle                |x    |x          |         |Brief                                                         |
|`Alt` + `F7`              |:new_moon:            |Load recording file               |x    |x          |         |Brief                                                         |
|`Shift` + `F7`            |:new_moon:            |Pause Macro                       |x    |?          |         |Brief                                                         |
|`F8`                      |:new_moon:            |Playback keystrokes               |x    |x          |         |Brief                                                         |
|`Alt` + `F8`              |:new_moon:            |Write recording file              |     |x          |         |Codewright                                                    |
|`F9`                      |:see_no_evil:         |Load Macro File / Load DLL        |x    |x          |         |Brief                                                         |
|`Shift` + `F9`            |:see_no_evil:         |Delete Macro File / Unload DLL    |x    |x          |         |Brief                                                         |
|`Alt` + `G`               |:full_moon:           |Go to line (prompt)               |x    |x          |         |Brief                                                         |
|`Ctrl` + `G`              |:waning_gibbous_moon: |Display routines                  |     |x          |         |Codewright (popup? Fold?)                                     |
|`Alt` + `H`               |:new_moon:            |Help                              |x    |           |         |Brief                                                         |
|`Ctrl` + `Shift` + `H`    |:new_moon:            |Binary/Hex view                   |     |x          |         |Codewright                                                    |
|`Home`                    |:full_moon:           |Beginning of line                 |x    |x          |         |Brief                                                         |
|`Ctrl` + `Home`           |:new_moon:            |Top of window                     |x    |x          |         |Brief                                                         |
|`Shift` + `Home`          |:new_moon:            |Left window edge                  |     |x          |         |Codewright                                                    |
|`Home` + `Home`           |:full_moon:           |Top of window                     |x    |x          |         |Brief                                                         |
|`Home` + `Home` + `Home`  |:full_moon:           |Top of file                       |x    |x          |         |Brief                                                         |
|`Alt` + `I`               |:new_moon:            |Insert mode on/off                |x    |x          |         |Brief                                                         |
|`Ins`                     |:full_moon:           |Paste                             |x    |x          |         |Brief                                                         |
|`Ctrl` + `Ins`            |:full_moon:           |Copy                              |     |x          |         |Codewright (same as `Numpad +`)                               |
|`Alt` + `J` _number_      |:new_moon:            |Go to mark (prompt)               |x    |x          |         |Brief                                                         |
|`Alt` + `K`               |:full_moon:           |Delete to end of line             |x    |x          |         |Brief                                                         |
|`Ctrl` + `K`              |:full_moon:           |Delete to start of line           |     |x          |         |Codewright                                                    |
|`Ctrl` + `Shift` + `K`    |:new_moon:            |Kiss matching brace               |     |x          |         |Codewright                                                    |
|`Alt` + `L`               |:new_moon:            |Begin selection (line)            |x    |x          |         |Brief                                                         |
|`Left`                    |:full_moon:           |Column left                       |x    |x          |         |Brief                                                         |
|`Alt` + `Shift` + `Left`  |:new_moon:            |Previous Document Position (Back) |     |x          |         |Codewright                                                    |
|`Ctrl` + `Left`           |:full_moon:           |Word left                         |x    |x          |         |Brief                                                         |
|`Shift` + `Left`          |:new_moon:            |Select window at left             |     |x          |         |Codewright                                                    |
|`Alt` + `M`               |:new_moon:            |Begin selection (inclusive)       |x    |x          |         |Brief                                                         |
|`Ctrl` + `Shift` + `M`    |:new_moon:            |Multi-buffer Search again         |     |           |         |??                                                            |
|`Alt` + `N`               |:full_moon:           |Next buffer                       |x    |x          |         |Brief                                                         |
|`Ctrl` + `N`              |:new_moon:            |Next error                        |x    |x          |         |Brief                                                         |
|`Numpad *`                |:full_moon:           |Undo                              |x    |x          |         |Brief                                                         |
|`Ctrl` + `Numpad /`       |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |Codewright                                                    |
|`Numpad -`                |:full_moon:           |Cut                               |x    |x          |         |Brief                                                         |
|`Numpad +`                |:full_moon:           |Copy                              |x    |x          |         |Brief                                                         |
|`Numpad` _number_         |:new_moon:            |Set mark _number_                 |     |           |x        |Personal                                                      |
|`Ctrl` + `Numpad` _number_|:new_moon:            |Go to mark _number_               |     |           |x        |Personal                                                      |
|`Alt` + `O`               |:waning_gibbous_moon: |Change output name                |x    |x          |         |Brief                                                         |
|`Alt` + `P`               |:new_moon:            |Print buffer / selection          |x    |x          |         |Brief                                                         |
|`Ctrl` + `P`              |:new_moon:            |Show errors                       |x    |x          |         |Brief                                                         |
|`PgDn`                    |:full_moon:           |Page down                         |x    |x          |         |Brief                                                         |
|`Ctrl` + `PgDn`           |:full_moon:           |End of Buffer / Bottom of file    |x    |x          |         |Brief                                                         |
|`PgUp`                    |:full_moon:           |Page up                           |x    |x          |         |Brief                                                         |
|`Ctrl` + `PgUp`           |:new_moon:            |Top of file                       |x    |x          |         |Brief                                                         |
|`Alt` + `Q`               |:new_moon:            |Quoted Insert                     |x    |x          |         |Brief                                                         |
|`Ctrl` + `Shift` + `Q`    |:new_moon:            |Quick search for word             |     |x          |         |Codewright                                                    |
|`Alt` + `R`               |:new_moon:            |Read file into buffer             |x    |x          |         |Brief                                                         |
|`Ctrl` + `R`              |:new_moon:            |Repeat key action                 |x    |x          |         |Brief                                                         |
|`Right`                   |:full_moon:           |Column right                      |x    |x          |         |Brief                                                         |
|`Alt` + `Shift` + `Right` |:new_moon:            |Next Document Position (Back)     |     |x          |         |Codewright                                                    |
|`Ctrl` + `Right`          |:full_moon:           |Word right                        |x    |x          |         |Brief                                                         |
|`Shift` + `Right`         |:new_moon:            |Select window at right            |     |x          |         |Codewright                                                    |
|`Alt` + `S`               |:waning_gibbous_moon: |Search                            |x    |x          |         |Brief                                                         |
|`Space`                   |:full_moon:           |Space / Indent block by space     |x    |x          |         |Brief                                                         |
|`Shift` + `Space`         |:new_moon:            |Unindent block by space           |     |           |         |**additional command. TODO tie to setting*                    |
|`Alt` + `T`               |:waning_gibbous_moon: |Replace                           |x    |x          |         |Brief                                                         |
|`Ctrl` + `T`              |:new_moon:            |Make current line top of window   |x    |x          |         |Brief                                                         |
|`Tab`                     |:full_moon:           |Tab / Indent block by tab         |x    |x          |         |Brief                                                         |
|`Shift` + `Tab`           |:full_moon:           |Back Tab / Unindent block by tab  |x    |x          |         |Brief                                                         |
|`Alt` + `U`               |:full_moon:           |Undo                              |x    |x          |         |Brief                                                         |
|`Ctrl` + `U`              |:new_moon:            |Redo                              |x    |x          |         |Brief                                                         |
|`Up`                      |:full_moon:           |Line up                           |x    |x          |         |Brief                                                         |
|`Alt` + `Shift` + `Up`    |:new_moon:            |Previous split window pane        |     |x          |         |Codewright                                                    |
|`Shift` + `Up`            |:new_moon:            |Select window above               |     |x          |         |Codewright                                                    |
|`Alt` + `V`               |:new_moon:            |Print version                     |x    |x          |         |Brief                                                         |
|`Alt` + `W`               |:full_moon:           |Save file                         |x    |x          |         |Brief                                                         |
|`Alt` + `W`               |:new_moon:            |Write selection to file           |x    |?          |         |Brief                                                         |
|`Ctrl` + `W`              |:see_no_evil:         |Backups on/off                    |x    |x          |         |Brief                                                         |
|`Alt` + `X`               |:new_moon:            |Quit with prompt                  |x    |x          |         |Brief                                                         |
|`Ctrl` + `X`              |:new_moon:            |Quit with write                   |x    |x          |         |Brief                                                         |
|`Alt` + `Y`               |:full_moon:           |Redo                              |     |x          |         |Codewright                                                    |
|`Alt` + `Z`               |:new_moon:            |Suspend Brief / Shell             |x    |x          |         |Brief n/a.  Codewright?                                       |
|`Ctrl` + `Z`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |Brief                                                         |


## Known Issues

WIP.

## Release Notes

None so far.

-----------------------------------------------------------------------------------------------------------

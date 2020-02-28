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
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Alt` + `-`               |:full_moon:           |Previous buffer                   |x    |x          |         |                                        |
|`Ctrl` + `-`              |:full_moon:           |Close Buffer                      |x    |x          |         |                                        |
|`Alt` + `=`               |:full_moon:           |Next buffer                       |     |           |x        |                                        |
|`Alt` + `B`               |:waning_gibbous_moon: |List of buffers                   |x    |x          |         |                                        |
|`Alt` + `E`               |:waning_gibbous_moon: |Open file                         |x    |x          |         |                                        |
|`Alt` + `F`               |:construction:        |Display filename                  |x    |x          |         |                                        |
|`Alt` + `N`               |:full_moon:           |Next buffer                       |x    |x          |         |                                        |
|`Alt` + `O`               |:waning_gibbous_moon: |Change output name                |x    |x          |         |                                        |
|`Alt` + `P`               |:new_moon:            |Print buffer / selection          |x    |x          |         |                                        |
|`Alt` + `R`               |:new_moon:            |Read file into buffer             |x    |x          |         |                                        |
|`Alt` + `W`               |:full_moon:           |Save file                         |x    |x          |         |                                        |
|`Alt` + `W`               |:new_moon:            |Write selection to file           |x    |?          |         |                                        |

### Cursor Motion/Scrolling
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Ctrl` + `B`              |:new_moon:            |Make current line bottom of window|x    |x          |         |                                        |
|`Ctrl` + `C`              |:new_moon:            |Center current line in window     |x    |x          |         |                                        |
|`Ctrl` + `D`              |:new_moon:            |Scroll down 1 line                |x    |x          |         |                                        |
|`Down`                    |:full_moon:           |Line down                         |x    |x          |         |                                        |
|`Ctrl` + `E`              |:new_moon:            |Scroll up 1 line                  |x    |x          |         |                                        |
|`End`                     |:last_quarter_moon:   |End of line                       |x    |x          |         |                                        |
|`Ctrl` + `End`            |:new_moon:            |Bottom of window                  |x    |x          |         |                                        |
|`Shift` + `End`           |:new_moon:            |Right window edge                 |x    |x          |         |                                        |
|`End` + `End`             |:last_quarter_moon:   |Bottom of window                  |x    |x          |         |                                        |
|`End` + `End` + `End`     |:last_quarter_moon:   |Bottom of file                    |x    |x          |         |                                        |
|`Alt` + `G`               |:full_moon:           |Go to line (prompt)               |x    |x          |         |                                        |
|`Home`                    |:full_moon:           |Beginning of line                 |x    |x          |         |                                        |
|`Ctrl` + `Home`           |:new_moon:            |Top of window                     |x    |x          |         |                                        |
|`Shift` + `Home`          |:new_moon:            |Left window edge                  |     |x          |         |                                        |
|`Home` + `Home`           |:full_moon:           |Top of window                     |x    |x          |         |                                        |
|`Home` + `Home` + `Home`  |:full_moon:           |Top of file                       |x    |x          |         |                                        |
|`Left`                    |:full_moon:           |Column left                       |x    |x          |         |                                        |
|`Alt` + `Shift` + `Left`  |:new_moon:            |Previous Document Position (Back) |     |x          |         |                                        |
|`Ctrl` + `Left`           |:full_moon:           |Word left                         |x    |x          |         |                                        |
|`PgDn`                    |:full_moon:           |Page down                         |x    |x          |         |                                        |
|`Ctrl` + `PgDn`           |:full_moon:           |End of Buffer / Bottom of file    |x    |x          |         |                                        |
|`PgUp`                    |:full_moon:           |Page up                           |x    |x          |         |                                        |
|`Ctrl` + `PgUp`           |:new_moon:            |Top of file                       |x    |x          |         |                                        |
|`Right`                   |:full_moon:           |Column right                      |x    |x          |         |                                        |
|`Alt` + `Shift` + `Right` |:new_moon:            |Next Document Position (Back)     |     |x          |         |                                        |
|`Ctrl` + `Right`          |:full_moon:           |Word right                        |x    |x          |         |                                        |
|`Ctrl` + `T`              |:new_moon:            |Make current line top of window   |x    |x          |         |                                        |
|`Up`                      |:full_moon:           |Line up                           |x    |x          |         |                                        |

### Editing
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Ctrl` + `<`              |:waning_crescent_moon:|Slide-out Prompt                  |     |x          |         |                                        |
|`Ctrl` + `>`              |:waning_crescent_moon:|Slide-in Prompt                   |     |x          |         |                                        |
|`Bksp`                    |:full_moon:           |Delete character to left          |x    |x          |         |                                        |
|`Alt` + `Bksp`            |:full_moon:           |Delete next word                  |     |x          |         |                                        |
|`Ctrl` + `Bksp`           |:full_moon:           |Delete previous word              |x    |x          |         |                                        |
|`Shift` + `Bksp`          |:full_moon:           |Delete character to left          |     |x          |         |Codewright (same as `Bksp`)             |
|`Alt` + `D`               |:full_moon:           |Delete line                       |x    |x          |         |                                        |
|`Del`                     |:full_moon:           |Delete character                  |x    |x          |         |                                        |
|`Enter`                   |:full_moon:           |Enter                             |x    |x          |         |                                        |
|`Ctrl` + `Enter`          |:full_moon:           |Insert line below                 |x    |x          |         |                                        |
|`Alt` + `K`               |:full_moon:           |Delete to end of line             |x    |x          |         |                                        |
|`Ctrl` + `K`              |:full_moon:           |Delete to start of line           |     |x          |         |                                        |
|`Numpad *`                |:full_moon:           |Undo                              |x    |x          |         |                                        |
|`Alt` + `Q`               |:new_moon:            |Quoted Insert                     |x    |x          |         |                                        |
|`Space`                   |:full_moon:           |Space / Indent block by space     |x    |x          |         |                                        |
|`Shift` + `Space`         |:new_moon:            |Unindent block by space           |     |           |         |                                        |
|`Tab`                     |:full_moon:           |Tab / Indent block by tab         |x    |x          |         |                                        |
|`Shift` + `Tab`           |:full_moon:           |Back Tab / Unindent block by tab  |x    |x          |         |                                        |
|`Alt` + `U`               |:full_moon:           |Undo                              |x    |x          |         |                                        |
|`Ctrl` + `U`              |:new_moon:            |Redo                              |x    |x          |         |                                        |
|`Alt` + `Y`               |:full_moon:           |Redo                              |     |x          |         |                                        |

### Scrap/Clipboard
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Ctrl` + `/`              |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |                                        |
|`Shift` + `Del`           |:full_moon:           |Cut                               |     |x          |         |                                        |
|`Ins`                     |:full_moon:           |Paste                             |x    |x          |         |                                        |
|`Ctrl` + `Ins`            |:full_moon:           |Copy                              |     |x          |         |                                        |
|`Ctrl` + `Numpad /`       |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |                                        |
|`Numpad -`                |:full_moon:           |Cut                               |x    |x          |         |                                        |
|`Numpad +`                |:full_moon:           |Copy                              |x    |x          |         |                                        |

### Search/Replace
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`F5`                      |:waning_gibbous_moon: |Search                            |x    |x          |         |                                        |
|`Alt` + `F5`              |:new_moon:            |Reverse Search                    |x    |x          |         |                                        |
|`Ctrl` + `F5`             |:new_moon:            |Ignore case on/off                |x    |x          |         |                                        |
|`Shift` + `F5`            |:waning_gibbous_moon: |Search again                      |x    |x          |         |                                        |
|`F6`                      |:waning_gibbous_moon: |Replace                           |x    |x          |         |                                        |
|`Alt` + `F6`              |:new_moon:            |Reverse Replace                   |x    |x          |         |                                        |
|`Ctrl` + `F6`             |:new_moon:            |Regular expressions on/off        |x    |x          |         |                                        |
|`Shift` + `F6`            |:waning_gibbous_moon: |Replace again                     |x    |x          |         |                                        |
|`Ctrl` + `Shift` + `K`    |:new_moon:            |Kiss matching brace               |     |x          |         |                                        |
|`Ctrl` + `Shift` + `M`    |:new_moon:            |Multi-buffer Search again         |     |           |         |                                        |
|`Ctrl` + `Shift` + `Q`    |:new_moon:            |Quick search for word             |     |x          |         |                                        |
|`Alt` + `S`               |:waning_gibbous_moon: |Search                            |x    |x          |         |                                        |
|`Alt` + `T`               |:waning_gibbous_moon: |Replace                           |x    |x          |         |                                        |

### Selections/Marks
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Alt` + _number_          |:new_moon:            |Set mark *number*                 |x    |x          |         |Brief. Keypad numbers only?  Not keypad?|
|`Alt` + `A`               |:new_moon:            |Begin selection (exclusive)       |x    |x          |         |                                        |
|`Ctrl` + `A`              |:new_moon:            |Close/open Selection              |     |x          |         |                                        |
|`Alt` + `C`               |:new_moon:            |Begin selection (column)          |x    |x          |         |                                        |
|`Alt` + `J` _number_      |:new_moon:            |Go to mark (prompt)               |x    |x          |         |                                        |
|`Alt` + `L`               |:new_moon:            |Begin selection (line)            |x    |x          |         |                                        |
|`Alt` + `M`               |:new_moon:            |Begin selection (inclusive)       |x    |x          |         |                                        |
|`Numpad` _number_         |:new_moon:            |Set mark _number_                 |     |           |x        |                                        |
|`Ctrl` + `Numpad` _number_|:new_moon:            |Go to mark _number_               |     |           |x        |                                        |

### System
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Ctrl` + `Shift` + `A`    |:new_moon:            |Text Mode / Deselect / Unfold     |     |x          |         |                                        |
|`Ctrl` + `Break`          |:see_no_evil:         |Halt                              |x    |           |         |                                        |
|`Shift` + `Enter`         |:new_moon:            |Expand/Collapse                   |     |x          |         |                                        |
|`Esc`                     |:new_moon:            |Text Mode / Deselect / Unfold     |x    |x          |         |                                        |
|`Shift` + `F1`            |:see_no_evil:         |CodeSense Hover Tooltip           |     |x          |         |                                        |
|`F10`                     |:new_moon:            |API interface / Execute Macro     |x    |x          |         |                                        |
|`Alt` + `F10`             |:new_moon:            |Compile buffer                    |x    |x          |         |                                        |
|`Ctrl` + `F4`             |:new_moon:            |Close Window                      |     |x          |         |                                        |
|`F7`                      |:new_moon:            |Record keys toggle                |x    |x          |         |                                        |
|`Alt` + `F7`              |:new_moon:            |Load recording file               |x    |x          |         |                                        |
|`Shift` + `F7`            |:new_moon:            |Pause Macro                       |x    |?          |         |                                        |
|`F8`                      |:new_moon:            |Playback keystrokes               |x    |x          |         |                                        |
|`Alt` + `F8`              |:new_moon:            |Write recording file              |     |x          |         |                                        |
|`F9`                      |:see_no_evil:         |Load Macro File / Load DLL        |x    |x          |         |                                        |
|`Shift` + `F9`            |:see_no_evil:         |Delete Macro File / Unload DLL    |x    |x          |         |                                        |
|`Ctrl` + `G`              |:waning_gibbous_moon: |Display routines                  |     |x          |         |                                        |
|`Alt` + `H`               |:new_moon:            |Help                              |x    |           |         |                                        |
|`Ctrl` + `Shift` + `H`    |:new_moon:            |Binary/Hex view                   |     |x          |         |                                        |
|`Alt` + `I`               |:new_moon:            |Insert mode on/off                |x    |x          |         |                                        |
|`Ctrl` + `N`              |:new_moon:            |Next error                        |x    |x          |         |                                        |
|`Ctrl` + `P`              |:new_moon:            |Show errors                       |x    |x          |         |                                        |
|`Ctrl` + `R`              |:new_moon:            |Repeat key action                 |x    |x          |         |                                        |
|`Alt` + `V`               |:new_moon:            |Print version                     |x    |x          |         |                                        |
|`Ctrl` + `W`              |:see_no_evil:         |Backups on/off                    |x    |x          |         |                                        |
|`Alt` + `X`               |:new_moon:            |Quit with prompt                  |x    |x          |         |                                        |
|`Ctrl` + `X`              |:new_moon:            |Quit with write                   |x    |x          |         |                                        |
|`Alt` + `Z`               |:new_moon:            |Suspend Brief / Shell             |x    |x          |         |                                        |

### Window
|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Ctrl` + `Shift` + `C`    |:new_moon:            |Compact Mode                      |     |x          |         |                                        |
|`Alt` + `Shift` + `Down`  |:new_moon:            |Next split window pane            |     |x          |         |                                        |
|`Shift` + `Down`          |:new_moon:            |Select window below               |     |x          |         |                                        |
|`F1`                      |:new_moon:            |Move to window                    |x    |x          |         |                                        |
|`Alt` + `F1`              |:new_moon:            |Borders on/off                    |x    |x          |         |                                        |
|`F2`                      |:new_moon:            |Resize window                     |x    |x          |         |                                        |
|`Alt` + `F2`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |                                        |
|`F3`                      |:new_moon:            |Split window                      |x    |x          |         |                                        |
|`F4`                      |:new_moon:            |Delete window                     |x    |x          |         |                                        |
|`Shift` + `Left`          |:new_moon:            |Select window at left             |     |x          |         |                                        |
|`Shift` + `Right`         |:new_moon:            |Select window at right            |     |x          |         |                                        |
|`Alt` + `Shift` + `Up`    |:new_moon:            |Previous split window pane        |     |x          |         |                                        |
|`Shift` + `Up`            |:new_moon:            |Select window above               |     |x          |         |                                        |
|`Ctrl` + `Z`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |                                        |

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

|Command                   |Status                |Description                       |Brief|Codewright |Personal |Notes                                   |
|--------------------------|:--------------------:|----------------------------------|:---:|:---------:|:-------:|----------------------------------------|
|`Alt` + _number_          |:new_moon:            |Set mark *number*                 |x    |x          |         |Brief. Keypad numbers only?  Not keypad?|
|`Ctrl` + `/`              |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |                                        |
|`Alt` + `-`               |:full_moon:           |Previous buffer                   |x    |x          |         |                                        |
|`Ctrl` + `-`              |:full_moon:           |Close Buffer                      |x    |x          |         |                                        |
|`Ctrl` + `<`              |:waning_crescent_moon:|Slide-out Prompt                  |     |x          |         |                                        |
|`Alt` + `=`               |:full_moon:           |Next buffer                       |     |           |x        |                                        |
|`Ctrl` + `>`              |:waning_crescent_moon:|Slide-in Prompt                   |     |x          |         |                                        |
|`Alt` + `A`               |:new_moon:            |Begin selection (exclusive)       |x    |x          |         |                                        |
|`Ctrl` + `A`              |:new_moon:            |Close/open Selection              |     |x          |         |                                        |
|`Ctrl` + `Shift` + `A`    |:new_moon:            |Text Mode / Deselect / Unfold     |     |x          |         |                                        |
|`Alt` + `B`               |:waning_gibbous_moon: |List of buffers                   |x    |x          |         |                                        |
|`Ctrl` + `B`              |:new_moon:            |Make current line bottom of window|x    |x          |         |                                        |
|`Bksp`                    |:full_moon:           |Delete character to left          |x    |x          |         |                                        |
|`Alt` + `Bksp`            |:full_moon:           |Delete next word                  |     |x          |         |                                        |
|`Ctrl` + `Bksp`           |:full_moon:           |Delete previous word              |x    |x          |         |                                        |
|`Shift` + `Bksp`          |:full_moon:           |Delete character to left          |     |x          |         |Codewright (same as `Bksp`)             |
|`Ctrl` + `Break`          |:see_no_evil:         |Halt                              |x    |           |         |                                        |
|`Alt` + `C`               |:new_moon:            |Begin selection (column)          |x    |x          |         |                                        |
|`Ctrl` + `C`              |:new_moon:            |Center current line in window     |x    |x          |         |                                        |
|`Ctrl` + `Shift` + `C`    |:new_moon:            |Compact Mode                      |     |x          |         |                                        |
|`Alt` + `D`               |:full_moon:           |Delete line                       |x    |x          |         |                                        |
|`Ctrl` + `D`              |:new_moon:            |Scroll down 1 line                |x    |x          |         |                                        |
|`Del`                     |:full_moon:           |Delete character                  |x    |x          |         |                                        |
|`Shift` + `Del`           |:full_moon:           |Cut                               |     |x          |         |                                        |
|`Down`                    |:full_moon:           |Line down                         |x    |x          |         |                                        |
|`Alt` + `Shift` + `Down`  |:new_moon:            |Next split window pane            |     |x          |         |                                        |
|`Shift` + `Down`          |:new_moon:            |Select window below               |     |x          |         |                                        |
|`Alt` + `E`               |:waning_gibbous_moon: |Open file                         |x    |x          |         |                                        |
|`Ctrl` + `E`              |:new_moon:            |Scroll up 1 line                  |x    |x          |         |                                        |
|`End`                     |:last_quarter_moon:   |End of line                       |x    |x          |         |                                        |
|`Ctrl` + `End`            |:new_moon:            |Bottom of window                  |x    |x          |         |                                        |
|`Shift` + `End`           |:new_moon:            |Right window edge                 |x    |x          |         |                                        |
|`End` + `End`             |:last_quarter_moon:   |Bottom of window                  |x    |x          |         |                                        |
|`End` + `End` + `End`     |:last_quarter_moon:   |Bottom of file                    |x    |x          |         |                                        |
|`Enter`                   |:full_moon:           |Enter                             |x    |x          |         |                                        |
|`Ctrl` + `Enter`          |:full_moon:           |Insert line below                 |x    |x          |         |                                        |
|`Shift` + `Enter`         |:new_moon:            |Expand/Collapse                   |     |x          |         |                                        |
|`Esc`                     |:new_moon:            |Text Mode / Deselect / Unfold     |x    |x          |         |                                        |
|`Alt` + `F`               |:construction:        |Display filename                  |x    |x          |         |                                        |
|`F1`                      |:new_moon:            |Move to window                    |x    |x          |         |                                        |
|`Alt` + `F1`              |:new_moon:            |Borders on/off                    |x    |x          |         |                                        |
|`Shift` + `F1`            |:see_no_evil:         |CodeSense Hover Tooltip           |     |x          |         |                                        |
|`F10`                     |:new_moon:            |API interface / Execute Macro     |x    |x          |         |                                        |
|`Alt` + `F10`             |:new_moon:            |Compile buffer                    |x    |x          |         |                                        |
|`F2`                      |:new_moon:            |Resize window                     |x    |x          |         |                                        |
|`Alt` + `F2`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |                                        |
|`F3`                      |:new_moon:            |Split window                      |x    |x          |         |                                        |
|`F4`                      |:new_moon:            |Delete window                     |x    |x          |         |                                        |
|`Ctrl` + `F4`             |:new_moon:            |Close Window                      |     |x          |         |                                        |
|`F5`                      |:waning_gibbous_moon: |Search                            |x    |x          |         |                                        |
|`Alt` + `F5`              |:new_moon:            |Reverse Search                    |x    |x          |         |                                        |
|`Ctrl` + `F5`             |:new_moon:            |Ignore case on/off                |x    |x          |         |                                        |
|`Shift` + `F5`            |:waning_gibbous_moon: |Search again                      |x    |x          |         |                                        |
|`F6`                      |:waning_gibbous_moon: |Replace                           |x    |x          |         |                                        |
|`Alt` + `F6`              |:new_moon:            |Reverse Replace                   |x    |x          |         |                                        |
|`Ctrl` + `F6`             |:new_moon:            |Regular expressions on/off        |x    |x          |         |                                        |
|`Shift` + `F6`            |:waning_gibbous_moon: |Replace again                     |x    |x          |         |                                        |
|`F7`                      |:new_moon:            |Record keys toggle                |x    |x          |         |                                        |
|`Alt` + `F7`              |:new_moon:            |Load recording file               |x    |x          |         |                                        |
|`Shift` + `F7`            |:new_moon:            |Pause Macro                       |x    |?          |         |                                        |
|`F8`                      |:new_moon:            |Playback keystrokes               |x    |x          |         |                                        |
|`Alt` + `F8`              |:new_moon:            |Write recording file              |     |x          |         |                                        |
|`F9`                      |:see_no_evil:         |Load Macro File / Load DLL        |x    |x          |         |                                        |
|`Shift` + `F9`            |:see_no_evil:         |Delete Macro File / Unload DLL    |x    |x          |         |                                        |
|`Alt` + `G`               |:full_moon:           |Go to line (prompt)               |x    |x          |         |                                        |
|`Ctrl` + `G`              |:waning_gibbous_moon: |Display routines                  |     |x          |         |                                        |
|`Alt` + `H`               |:new_moon:            |Help                              |x    |           |         |                                        |
|`Ctrl` + `Shift` + `H`    |:new_moon:            |Binary/Hex view                   |     |x          |         |                                        |
|`Home`                    |:full_moon:           |Beginning of line                 |x    |x          |         |                                        |
|`Ctrl` + `Home`           |:new_moon:            |Top of window                     |x    |x          |         |                                        |
|`Shift` + `Home`          |:new_moon:            |Left window edge                  |     |x          |         |                                        |
|`Home` + `Home`           |:full_moon:           |Top of window                     |x    |x          |         |                                        |
|`Home` + `Home` + `Home`  |:full_moon:           |Top of file                       |x    |x          |         |                                        |
|`Alt` + `I`               |:new_moon:            |Insert mode on/off                |x    |x          |         |                                        |
|`Ins`                     |:full_moon:           |Paste                             |x    |x          |         |                                        |
|`Ctrl` + `Ins`            |:full_moon:           |Copy                              |     |x          |         |                                        |
|`Alt` + `J` _number_      |:new_moon:            |Go to mark (prompt)               |x    |x          |         |                                        |
|`Alt` + `K`               |:full_moon:           |Delete to end of line             |x    |x          |         |                                        |
|`Ctrl` + `K`              |:full_moon:           |Delete to start of line           |     |x          |         |                                        |
|`Ctrl` + `Shift` + `K`    |:new_moon:            |Kiss matching brace               |     |x          |         |                                        |
|`Alt` + `L`               |:new_moon:            |Begin selection (line)            |x    |x          |         |                                        |
|`Left`                    |:full_moon:           |Column left                       |x    |x          |         |                                        |
|`Alt` + `Shift` + `Left`  |:new_moon:            |Previous Document Position (Back) |     |x          |         |                                        |
|`Ctrl` + `Left`           |:full_moon:           |Word left                         |x    |x          |         |                                        |
|`Shift` + `Left`          |:new_moon:            |Select window at left             |     |x          |         |                                        |
|`Alt` + `M`               |:new_moon:            |Begin selection (inclusive)       |x    |x          |         |                                        |
|`Ctrl` + `Shift` + `M`    |:new_moon:            |Multi-buffer Search again         |     |           |         |                                        |
|`Alt` + `N`               |:full_moon:           |Next buffer                       |x    |x          |         |                                        |
|`Ctrl` + `N`              |:new_moon:            |Next error                        |x    |x          |         |                                        |
|`Numpad *`                |:full_moon:           |Undo                              |x    |x          |         |                                        |
|`Ctrl` + `Numpad /`       |:new_moon:            |Toggle clipboard/scrap            |     |x          |         |                                        |
|`Numpad -`                |:full_moon:           |Cut                               |x    |x          |         |                                        |
|`Numpad +`                |:full_moon:           |Copy                              |x    |x          |         |                                        |
|`Numpad` _number_         |:new_moon:            |Set mark _number_                 |     |           |x        |                                        |
|`Ctrl` + `Numpad` _number_|:new_moon:            |Go to mark _number_               |     |           |x        |                                        |
|`Alt` + `O`               |:waning_gibbous_moon: |Change output name                |x    |x          |         |                                        |
|`Alt` + `P`               |:new_moon:            |Print buffer / selection          |x    |x          |         |                                        |
|`Ctrl` + `P`              |:new_moon:            |Show errors                       |x    |x          |         |                                        |
|`PgDn`                    |:full_moon:           |Page down                         |x    |x          |         |                                        |
|`Ctrl` + `PgDn`           |:full_moon:           |End of Buffer / Bottom of file    |x    |x          |         |                                        |
|`PgUp`                    |:full_moon:           |Page up                           |x    |x          |         |                                        |
|`Ctrl` + `PgUp`           |:new_moon:            |Top of file                       |x    |x          |         |                                        |
|`Alt` + `Q`               |:new_moon:            |Quoted Insert                     |x    |x          |         |                                        |
|`Ctrl` + `Shift` + `Q`    |:new_moon:            |Quick search for word             |     |x          |         |                                        |
|`Alt` + `R`               |:new_moon:            |Read file into buffer             |x    |x          |         |                                        |
|`Ctrl` + `R`              |:new_moon:            |Repeat key action                 |x    |x          |         |                                        |
|`Right`                   |:full_moon:           |Column right                      |x    |x          |         |                                        |
|`Alt` + `Shift` + `Right` |:new_moon:            |Next Document Position (Back)     |     |x          |         |                                        |
|`Ctrl` + `Right`          |:full_moon:           |Word right                        |x    |x          |         |                                        |
|`Shift` + `Right`         |:new_moon:            |Select window at right            |     |x          |         |                                        |
|`Alt` + `S`               |:waning_gibbous_moon: |Search                            |x    |x          |         |                                        |
|`Space`                   |:full_moon:           |Space / Indent block by space     |x    |x          |         |                                        |
|`Shift` + `Space`         |:new_moon:            |Unindent block by space           |     |           |         |                                        |
|`Alt` + `T`               |:waning_gibbous_moon: |Replace                           |x    |x          |         |                                        |
|`Ctrl` + `T`              |:new_moon:            |Make current line top of window   |x    |x          |         |                                        |
|`Tab`                     |:full_moon:           |Tab / Indent block by tab         |x    |x          |         |                                        |
|`Shift` + `Tab`           |:full_moon:           |Back Tab / Unindent block by tab  |x    |x          |         |                                        |
|`Alt` + `U`               |:full_moon:           |Undo                              |x    |x          |         |                                        |
|`Ctrl` + `U`              |:new_moon:            |Redo                              |x    |x          |         |                                        |
|`Up`                      |:full_moon:           |Line up                           |x    |x          |         |                                        |
|`Alt` + `Shift` + `Up`    |:new_moon:            |Previous split window pane        |     |x          |         |                                        |
|`Shift` + `Up`            |:new_moon:            |Select window above               |     |x          |         |                                        |
|`Alt` + `V`               |:new_moon:            |Print version                     |x    |x          |         |                                        |
|`Alt` + `W`               |:full_moon:           |Save file                         |x    |x          |         |                                        |
|`Alt` + `W`               |:new_moon:            |Write selection to file           |x    |?          |         |                                        |
|`Ctrl` + `W`              |:see_no_evil:         |Backups on/off                    |x    |x          |         |                                        |
|`Alt` + `X`               |:new_moon:            |Quit with prompt                  |x    |x          |         |                                        |
|`Ctrl` + `X`              |:new_moon:            |Quit with write                   |x    |x          |         |                                        |
|`Alt` + `Y`               |:full_moon:           |Redo                              |     |x          |         |                                        |
|`Alt` + `Z`               |:new_moon:            |Suspend Brief / Shell             |x    |x          |         |                                        |
|`Ctrl` + `Z`              |:new_moon:            |Zoom/Unzoom window                |x    |x          |         |                                        |


## Known Issues

WIP.

## Release Notes

None so far.

-----------------------------------------------------------------------------------------------------------

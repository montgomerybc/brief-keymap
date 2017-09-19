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
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Alt` + `-`               |:full_moon:           |Previous buffer                   |                                                        |
|`Ctrl` + `-`              |:full_moon:           |Close Buffer                      |                                                        |
|`Alt` + `=`               |:full_moon:           |Next buffer                       |                                                        |
|`Alt` + `B`               |:waning_gibbous_moon: |List of buffers                   |                                                        |
|`Alt` + `E`               |:waning_gibbous_moon: |Open file                         |                                                        |
|`Alt` + `F`               |:new_moon:            |Display filename                  |                                                        |
|`Alt` + `N`               |:full_moon:           |Next buffer                       |                                                        |
|`Alt` + `O`               |:waning_gibbous_moon: |Change output name                |                                                        |
|`Alt` + `P`               |:new_moon:            |Print buffer                      |                                                        |
|`Alt` + `R`               |:new_moon:            |Read file into buffer             |                                                        |
|`Alt` + `W`               |:full_moon:           |Save file                         |                                                        |
|`Alt` + `W`               |:new_moon:            |Write selection to file           |                                                        |

### Cursor Motion/Scrolling
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Ctrl` + `B`              |:new_moon:            |Make current line bottom of window|                                                        |
|`Ctrl` + `C`              |:new_moon:            |Center current line in window     |                                                        |
|`Ctrl` + `D`              |:new_moon:            |Scroll down 1 line                |                                                        |
|`Down`                    |:full_moon:           |Line down                         |                                                        |
|`End`                     |:last_quarter_moon:   |End of line                       |                                                        |
|`Ctrl` + `End`            |:new_moon:            |Bottom of window                  |                                                        |
|`Shift` + `End`           |:new_moon:            |Right window edge                 |                                                        |
|`End` + `End`             |:last_quarter_moon:   |Bottom of window                  |                                                        |
|`End` + `End` + `End`     |:last_quarter_moon:   |Bottom of file                    |                                                        |
|`Alt` + `G`               |:full_moon:           |Go to line (prompt)               |                                                        |
|`Home`                    |:full_moon:           |Beginning of line                 |                                                        |
|`Ctrl` + `Home`           |:new_moon:            |Top of window                     |                                                        |
|`Shift` + `Home`          |:new_moon:            |Left window edge                  |                                                        |
|`Home` + `Home`           |:full_moon:           |Top of window                     |                                                        |
|`Home` + `Home` + `Home`  |:full_moon:           |Top of file                       |                                                        |
|`Left`                    |:full_moon:           |Column left                       |                                                        |
|`Ctrl` + `Left`           |:full_moon:           |Word left                         |                                                        |
|`PgDn`                    |:full_moon:           |Page down                         |                                                        |
|`Ctrl` + `PgDn`           |:full_moon:           |Bottom of file                    |                                                        |
|`PgUp`                    |:full_moon:           |Page up                           |                                                        |
|`Ctrl` + `PgUp`           |:new_moon:            |Top of file                       |                                                        |
|`Right`                   |:full_moon:           |Column right                      |                                                        |
|`Ctrl` + `Right`          |:full_moon:           |Word right                        |                                                        |
|`Ctrl` + `T`              |:new_moon:            |Make current line top of window   |                                                        |
|`Ctrl` + `U`              |:new_moon:            |Scroll up 1 line                  |                                                        |
|`Up`                      |:full_moon:           |Line up                           |                                                        |

### Editing
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Ctrl` + `<`              |:waning_crescent_moon:|Slide-out Prompt                  |?? Codewright ??                                        |
|`Ctrl` + `>`              |:waning_crescent_moon:|Slide-in Prompt                   |?? Codewright ??                                        |
|`Bksp`                    |:full_moon:           |Delete character to left          |                                                        |
|`Alt` + `Bksp`            |:full_moon:           |Delete next word                  |                                                        |
|`Ctrl` + `Bksp`           |:full_moon:           |Delete previous word              |                                                        |
|`Alt` + `D`               |:full_moon:           |Delete line                       |                                                        |
|`Del`                     |:full_moon:           |Delete character                  |                                                        |
|`Ctrl` + `Enter`          |:full_moon:           |Insert line below                 |                                                        |
|`Alt` + `K`               |:full_moon:           |Delete to end of line             |                                                        |
|`Ctrl` + `K`              |:full_moon:           |Delete to start of line           |                                                        |
|`Numpad *`                |:full_moon:           |Undo                              |                                                        |
|`Alt` + `Q`               |:new_moon:            |Quoted Insert                     |                                                        |
|`Space`                   |:full_moon:           |Indent block by space             |                                                        |
|`Shift` + `Space`         |:new_moon:            |Unindent block by space           |**additional command. TODO tie to setting*              |
|`Tab`                     |:full_moon:           |Indent block by tab               |                                                        |
|`Shift` + `Tab`           |:full_moon:           |Unindent block by tab             |                                                        |
|`Alt` + `U`               |:full_moon:           |Undo                              |                                                        |
|`Alt` + `Y`               |:full_moon:           |Redo                              |                                                        |

### Scrap/Clipboard
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Ctrl` + `/`              |:new_moon:            |Toggle clipboard/scrap            |?? Codewright ??                                        |
|`Shift` + `Del`           |:full_moon:           |Cut                               |                                                        |
|`Ins`                     |:full_moon:           |Paste                             |                                                        |
|`Ctrl` + `Ins`            |:full_moon:           |Copy                              |                                                        |
|`Numpad -`                |:full_moon:           |Cut                               |                                                        |
|`Numpad +`                |:full_moon:           |Copy                              |                                                        |

### Search/Replace
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`F5`                      |:waning_gibbous_moon: |Search                            |                                                        |
|`Alt` + `F5`              |:new_moon:            |Reverse Search                    |                                                        |
|`Ctrl` + `F5`             |:new_moon:            |Ignore case on/off                |                                                        |
|`Shift` + `F5`            |:waning_gibbous_moon: |Search again                      |*use editor.action.addSelectionToNextFindMatch instead?*|
|`F6`                      |:waning_gibbous_moon: |Replace                           |                                                        |
|`Alt` + `F6`              |:new_moon:            |Reverse Replace                   |                                                        |
|`Ctrl` + `F6`             |:new_moon:            |Regular expressions on/off        |                                                        |
|`Shift` + `F6`            |:waning_gibbous_moon: |Replace                           |                                                        |
|`Ctrl` + `Shift` + `K`    |:new_moon:            |Kiss matching brace               |?? Codewright ??                                        |
|`Ctrl` + `Shift` + `M`    |:new_moon:            |Multi-buffer Search again         |?? Codewright ??                                        |
|`Ctrl` + `Shift` + `Q`    |:new_moon:            |Quick search for word             |                                                        |
|`Alt` + `S`               |:waning_gibbous_moon: |Search                            |                                                        |
|`Alt` + `T`               |:waning_gibbous_moon: |Replace                           |                                                        |

### Selections/Marks
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Alt` + _number_          |:new_moon:            |Set mark *number*                 |                                                        |
|`Alt` + `A`               |:new_moon:            |Begin selection (exclusive)       |                                                        |
|`Ctrl` + `A`              |:new_moon:            |Close/open Selection              |                                                        |
|`Alt` + `C`               |:new_moon:            |Begin selection (column)          |                                                        |
|`Alt` + `J` _number_      |:new_moon:            |Go to mark (prompt)               |                                                        |
|`Alt` + `L`               |:new_moon:            |Begin selection (line)            |                                                        |
|`Alt` + `M`               |:new_moon:            |Begin selection (inclusive)       |                                                        |
|`Numpad` _number_         |:new_moon:            |Set mark _number_                 |?? Original Brief ??                                    |
|`Ctrl` + `Numpad` _number_|:new_moon:            |Go to mark _number_               |?? Original Brief ??                                    |

### System
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Shift` + `Enter`         |:new_moon:            |Expand/Collapse                   |?? Codewright ??                                        |
|`Esc`                     |:new_moon:            |Text Mode                         |                                                        |
|`F10`                     |:see_no_evil:         |API interface                     |                                                        |
|`Alt` + `F10`             |:new_moon:            |Compile buffer                    |                                                        |
|`F7`                      |:new_moon:            |Record keys toggle                |                                                        |
|`Alt` + `F7`              |:new_moon:            |Load recording file               |?? Codewright ??                                        |
|`Shift` + `F7`            |:new_moon:            |Pause Macro                       |?? Epsilon: http://tinyurl.com/ybrbyaor ??              |
|`F8`                      |:new_moon:            |Playback keystrokes               |                                                        |
|`Alt` + `F8`              |:new_moon:            |Write recording file              |?? Codewright ??                                        |
|`F9`                      |:see_no_evil:         |Load DLL                          |?? Codewright ??                                        |
|`Shift` + `F9`            |:see_no_evil:         |Unload DLL                        |?? Codewright ??                                        |
|`Ctrl` + `G`              |:waning_gibbous_moon: |Display routines                  |                                                        |
|`Alt` + `H`               |:new_moon:            |Help                              |                                                        |
|`Alt` + `I`               |:new_moon:            |Insert mode on/off                |                                                        |
|`Ctrl` + `N`              |:new_moon:            |Next error                        |                                                        |
|`Ctrl` + `P`              |:new_moon:            |Show errors                       |                                                        |
|`Ctrl` + `R`              |:new_moon:            |Repeat key action                 |                                                        |
|`Alt` + `V`               |:new_moon:            |Print version                     |                                                        |
|`Ctrl` + `W`              |:see_no_evil:         |Backups on/off                    |                                                        |
|`Alt` + `X`               |:new_moon:            |Quit with prompt                  |                                                        |
|`Ctrl` + `X`              |:new_moon:            |Quit with write                   |                                                        |
|`Alt` + `Z`               |:new_moon:            |Shell                             |                                                        |

### Window
| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Shift` + `Down`          |:new_moon:            |Select window below               |                                                        |
|`F1`                      |:new_moon:            |Move to window                    |                                                        |
|`Alt` + `F1`              |:new_moon:            |Borders on/off                    |                                                        |
|`F2`                      |:new_moon:            |Resize window                     |                                                        |
|`Alt` + `F2`              |:new_moon:            |Zoom/Unzoom window                |                                                        |
|`F3`                      |:new_moon:            |Split window                      |                                                        |
|`F4`                      |:new_moon:            |Delete window                     |                                                        |
|`Shift` + `Left`          |:new_moon:            |Select window at left             |                                                        |
|`Shift` + `Right`         |:new_moon:            |Select window at right            |                                                        |
|`Shift` + `Up`            |:new_moon:            |Select window above               |                                                        |
|`Ctrl` + `Z`              |:new_moon:            |Zoom/Unzoom window                |                                                        |

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

| Command                  | Status               | Description                      | Notes                                                  |
|--------------------------|----------------------|----------------------------------|--------------------------------------------------------|
|`Alt` + _number_          |:new_moon:            |Set mark *number*                 |                                                        |
|`Ctrl` + `/`              |:new_moon:            |Toggle clipboard/scrap            |?? Codewright ??                                        |
|`Alt` + `-`               |:full_moon:           |Previous buffer                   |                                                        |
|`Ctrl` + `-`              |:full_moon:           |Close Buffer                      |                                                        |
|`Ctrl` + `<`              |:waning_crescent_moon:|Slide-out Prompt                  |?? Codewright ??                                        |
|`Alt` + `=`               |:full_moon:           |Next buffer                       |                                                        |
|`Ctrl` + `>`              |:waning_crescent_moon:|Slide-in Prompt                   |?? Codewright ??                                        |
|`Alt` + `A`               |:new_moon:            |Begin selection (exclusive)       |                                                        |
|`Ctrl` + `A`              |:new_moon:            |Close/open Selection              |                                                        |
|`Alt` + `B`               |:waning_gibbous_moon: |List of buffers                   |                                                        |
|`Ctrl` + `B`              |:new_moon:            |Make current line bottom of window|                                                        |
|`Bksp`                    |:full_moon:           |Delete character to left          |                                                        |
|`Alt` + `Bksp`            |:full_moon:           |Delete next word                  |                                                        |
|`Ctrl` + `Bksp`           |:full_moon:           |Delete previous word              |                                                        |
|`Alt` + `C`               |:new_moon:            |Begin selection (column)          |                                                        |
|`Ctrl` + `C`              |:new_moon:            |Center current line in window     |                                                        |
|`Alt` + `D`               |:full_moon:           |Delete line                       |                                                        |
|`Ctrl` + `D`              |:new_moon:            |Scroll down 1 line                |                                                        |
|`Del`                     |:full_moon:           |Delete character                  |                                                        |
|`Shift` + `Del`           |:full_moon:           |Cut                               |                                                        |
|`Down`                    |:full_moon:           |Line down                         |                                                        |
|`Shift` + `Down`          |:new_moon:            |Select window below               |                                                        |
|`Alt` + `E`               |:waning_gibbous_moon: |Open file                         |                                                        |
|`End`                     |:last_quarter_moon:   |End of line                       |                                                        |
|`Ctrl` + `End`            |:new_moon:            |Bottom of window                  |                                                        |
|`Shift` + `End`           |:new_moon:            |Right window edge                 |                                                        |
|`End` + `End`             |:last_quarter_moon:   |Bottom of window                  |                                                        |
|`End` + `End` + `End`     |:last_quarter_moon:   |Bottom of file                    |                                                        |
|`Ctrl` + `Enter`          |:full_moon:           |Insert line below                 |                                                        |
|`Shift` + `Enter`         |:new_moon:            |Expand/Collapse                   |?? Codewright ??                                        |
|`Esc`                     |:new_moon:            |Text Mode                         |                                                        |
|`Alt` + `F`               |:new_moon:            |Display filename                  |                                                        |
|`F1`                      |:new_moon:            |Move to window                    |                                                        |
|`Alt` + `F1`              |:new_moon:            |Borders on/off                    |                                                        |
|`F10`                     |:see_no_evil:         |API interface                     |                                                        |
|`Alt` + `F10`             |:new_moon:            |Compile buffer                    |                                                        |
|`F2`                      |:new_moon:            |Resize window                     |                                                        |
|`Alt` + `F2`              |:new_moon:            |Zoom/Unzoom window                |                                                        |
|`F3`                      |:new_moon:            |Split window                      |                                                        |
|`F4`                      |:new_moon:            |Delete window                     |                                                        |
|`F5`                      |:waning_gibbous_moon: |Search                            |                                                        |
|`Alt` + `F5`              |:new_moon:            |Reverse Search                    |                                                        |
|`Ctrl` + `F5`             |:new_moon:            |Ignore case on/off                |                                                        |
|`Shift` + `F5`            |:waning_gibbous_moon: |Search again                      |*use editor.action.addSelectionToNextFindMatch instead?*|
|`F6`                      |:waning_gibbous_moon: |Replace                           |                                                        |
|`Alt` + `F6`              |:new_moon:            |Reverse Replace                   |                                                        |
|`Ctrl` + `F6`             |:new_moon:            |Regular expressions on/off        |                                                        |
|`Shift` + `F6`            |:waning_gibbous_moon: |Replace                           |                                                        |
|`F7`                      |:new_moon:            |Record keys toggle                |                                                        |
|`Alt` + `F7`              |:new_moon:            |Load recording file               |?? Codewright ??                                        |
|`Shift` + `F7`            |:new_moon:            |Pause Macro                       |?? Epsilon: http://tinyurl.com/ybrbyaor ??              |
|`F8`                      |:new_moon:            |Playback keystrokes               |                                                        |
|`Alt` + `F8`              |:new_moon:            |Write recording file              |?? Codewright ??                                        |
|`F9`                      |:see_no_evil:         |Load DLL                          |?? Codewright ??                                        |
|`Shift` + `F9`            |:see_no_evil:         |Unload DLL                        |?? Codewright ??                                        |
|`Alt` + `G`               |:full_moon:           |Go to line (prompt)               |                                                        |
|`Ctrl` + `G`              |:waning_gibbous_moon: |Display routines                  |                                                        |
|`Alt` + `H`               |:new_moon:            |Help                              |                                                        |
|`Home`                    |:full_moon:           |Beginning of line                 |                                                        |
|`Ctrl` + `Home`           |:new_moon:            |Top of window                     |                                                        |
|`Shift` + `Home`          |:new_moon:            |Left window edge                  |                                                        |
|`Home` + `Home`           |:full_moon:           |Top of window                     |                                                        |
|`Home` + `Home` + `Home`  |:full_moon:           |Top of file                       |                                                        |
|`Alt` + `I`               |:new_moon:            |Insert mode on/off                |                                                        |
|`Ins`                     |:full_moon:           |Paste                             |                                                        |
|`Ctrl` + `Ins`            |:full_moon:           |Copy                              |                                                        |
|`Alt` + `J` _number_      |:new_moon:            |Go to mark (prompt)               |                                                        |
|`Alt` + `K`               |:full_moon:           |Delete to end of line             |                                                        |
|`Ctrl` + `K`              |:full_moon:           |Delete to start of line           |                                                        |
|`Ctrl` + `Shift` + `K`    |:new_moon:            |Kiss matching brace               |?? Codewright ??                                        |
|`Alt` + `L`               |:new_moon:            |Begin selection (line)            |                                                        |
|`Left`                    |:full_moon:           |Column left                       |                                                        |
|`Ctrl` + `Left`           |:full_moon:           |Word left                         |                                                        |
|`Shift` + `Left`          |:new_moon:            |Select window at left             |                                                        |
|`Alt` + `M`               |:new_moon:            |Begin selection (inclusive)       |                                                        |
|`Ctrl` + `Shift` + `M`    |:new_moon:            |Multi-buffer Search again         |?? Codewright ??                                        |
|`Alt` + `N`               |:full_moon:           |Next buffer                       |                                                        |
|`Ctrl` + `N`              |:new_moon:            |Next error                        |                                                        |
|`Numpad *`                |:full_moon:           |Undo                              |                                                        |
|`Numpad -`                |:full_moon:           |Cut                               |                                                        |
|`Numpad +`                |:full_moon:           |Copy                              |                                                        |
|`Numpad` _number_         |:new_moon:            |Set mark _number_                 |?? Original Brief ??                                    |
|`Ctrl` + `Numpad` _number_|:new_moon:            |Go to mark _number_               |?? Original Brief ??                                    |
|`Alt` + `O`               |:waning_gibbous_moon: |Change output name                |                                                        |
|`Alt` + `P`               |:new_moon:            |Print buffer                      |                                                        |
|`Ctrl` + `P`              |:new_moon:            |Show errors                       |                                                        |
|`PgDn`                    |:full_moon:           |Page down                         |                                                        |
|`Ctrl` + `PgDn`           |:full_moon:           |Bottom of file                    |                                                        |
|`PgUp`                    |:full_moon:           |Page up                           |                                                        |
|`Ctrl` + `PgUp`           |:new_moon:            |Top of file                       |                                                        |
|`Alt` + `Q`               |:new_moon:            |Quoted Insert                     |                                                        |
|`Ctrl` + `Shift` + `Q`    |:new_moon:            |Quick search for word             |                                                        |
|`Alt` + `R`               |:new_moon:            |Read file into buffer             |                                                        |
|`Ctrl` + `R`              |:new_moon:            |Repeat key action                 |                                                        |
|`Right`                   |:full_moon:           |Column right                      |                                                        |
|`Ctrl` + `Right`          |:full_moon:           |Word right                        |                                                        |
|`Shift` + `Right`         |:new_moon:            |Select window at right            |                                                        |
|`Alt` + `S`               |:waning_gibbous_moon: |Search                            |                                                        |
|`Space`                   |:full_moon:           |Indent block by space             |                                                        |
|`Shift` + `Space`         |:new_moon:            |Unindent block by space           |**additional command. TODO tie to setting*              |
|`Alt` + `T`               |:waning_gibbous_moon: |Replace                           |                                                        |
|`Ctrl` + `T`              |:new_moon:            |Make current line top of window   |                                                        |
|`Tab`                     |:full_moon:           |Indent block by tab               |                                                        |
|`Shift` + `Tab`           |:full_moon:           |Unindent block by tab             |                                                        |
|`Alt` + `U`               |:full_moon:           |Undo                              |                                                        |
|`Ctrl` + `U`              |:new_moon:            |Scroll up 1 line                  |                                                        |
|`Up`                      |:full_moon:           |Line up                           |                                                        |
|`Shift` + `Up`            |:new_moon:            |Select window above               |                                                        |
|`Alt` + `V`               |:new_moon:            |Print version                     |                                                        |
|`Alt` + `W`               |:full_moon:           |Save file                         |                                                        |
|`Alt` + `W`               |:new_moon:            |Write selection to file           |                                                        |
|`Ctrl` + `W`              |:see_no_evil:         |Backups on/off                    |                                                        |
|`Alt` + `X`               |:new_moon:            |Quit with prompt                  |                                                        |
|`Ctrl` + `X`              |:new_moon:            |Quit with write                   |                                                        |
|`Alt` + `Y`               |:full_moon:           |Redo                              |                                                        |
|`Alt` + `Z`               |:new_moon:            |Shell                             |                                                        |
|`Ctrl` + `Z`              |:new_moon:            |Zoom/Unzoom window                |                                                        |


## Known Issues

WIP.

## Release Notes

None so far.

-----------------------------------------------------------------------------------------------------------

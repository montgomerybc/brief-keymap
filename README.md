# brief-keymap README

This is a brief keymap for Visual Studio Code.

## Contents

## Requirements

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
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`Alt` + `O`                |:poodle:               |Change output name         |
|`Ctrl` + `-`               |:full_moon:            |Close Buffer               |
|`Alt` + `F`                |:new_moon:             |Display filename           |
|`Alt` + `B`                |:new_moon:             |List of buffers            |
|`Alt` + `N`                |:new_moon:             |Next buffer                |
|`Alt` + `E`                |:poodle:               |Open file                  |
|`Alt` + `-`                |:new_moon:             |Previous buffer            |
|`Alt` + `P`                |:new_moon:             |Print buffer               |
|`Alt` + `R`                |:new_moon:             |Read file into buffer      |
|`Alt` + `W`                |:full_moon:            |Save file                  |
|`Alt` + `W`                |:new_moon:             |Write selection to file    |

### Cursor Motion/Scrolling
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`Home`                     |:waning_gibbous_moon:  |Beginning of line          |
|`End` + `End` + `End`      |:last_quarter_moon:    |Bottom of file             |
|`Ctrl` + `PgDn`            |:full_moon:            |Bottom of file             |
|`End` + `End`              |:last_quarter_moon:    |Bottom of window           |
|`Ctrl` + `End`             |:new_moon:             |Bottom of window           |
|`Left`                     |:full_moon:            |Column left                |
|`Right`                    |:full_moon:            |Column right               |
|`End`                      |:last_quarter_moon:    |End of line                |
|`Alt` + `G`                |:full_moon:            |Go to line (prompt)        |
|`Alt` + `J`                |:new_moon:             |Go to mark (prompt)        |
|`Shift` + `Home`           |:new_moon:             |Left window edge           |
|`Down`                     |:full_moon:            |Line down                  |
|`Up`                       |:full_moon:            |Line up                    |
|`Ctrl` + `B`               |:new_moon:             |Make bottom of window      |
|`Ctrl` + `T`               |:new_moon:             |Make top of window         |
|`Ctrl` + `C`               |:new_moon:             |Make center of window      |
|`PgDn`                     |:full_moon:            |Page down                  |
|`PgUp`                     |:full_moon:            |Page up                    |
|`Shift` + `End`            |:new_moon:             |Right window edge          |
|`Ctrl` + `D`               |:new_moon:             |Scroll down 1 line         |
|`Ctrl` + `U`               |:new_moon:             |Scroll up 1 line           |
|`Home` + `Home` + `Home`   |:waning_gibbous_moon:  |Top of file                |
|`Ctrl` + `PgUp`            |:new_moon:             |Top of file                |
|`Home` + `Home`            |:waning_gibbous_moon:  |Top of window              |
|`Ctrl` + `Home`            |:new_moon:             |Top of window              |
|`Ctrl` + `Left`            |:full_moon:            |Word left                  |
|`Ctrl` + `Right`           |:full_moon:            |Word right                 |

### Editing
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`Del`                      |:full_moon:            |Delete character           |
|`Bksp`                     |:full_moon:            |Delete character to left   |
|`Alt` + `D`                |:full_moon:            |Delete line                |
|`Alt` + `K`                |:full_moon:            |Delete to end of line      |
|`Ctrl` + `K`               |:full_moon:            |Delete to start of line    |
|`Alt` + `Bksp`             |:full_moon:            |Delete next word           |
|`Ctrl` + `Bksp`            |:full_moon:            |Delete previous word       |
|`Tab`                      |:full_moon:            |Indent block by tab        |
|`Space`                    |:new_moon:             |Indent block by space      |
|`Ctrl` + `Enter`           |:full_moon:            |Insert line below          |
|`Alt` + `Q`                |:new_moon:             |Insert next literally      |
|`Alt` + `Y`                |:full_moon:            |Redo                       |
|`Ctrl` + `>`               |:new_moon:             |Slide-in Prompt            |
|`Ctrl` + `<`               |:new_moon:             |Slide-out Prompt           |
|`Alt` + `U`                |:full_moon:            |Undo                       |
|`Numpad *`                 |:full_moon:            |Undo                       |
|`Shift` + `Tab`            |:full_moon:            |Unindent block by tab      |

### Scrap/Clipboard
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`Ctrl` + `Ins`             |:full_moon:            |Copy                       |
|`Numpad +`                 |:full_moon:            |Copy                       |
|`Shift` + `Del`            |:full_moon:            |Cut                        |
|`Numpad -`                 |:full_moon:            |Cut                        |
|`Ins`                      |:full_moon:            |Paste                      |
|`Ctrl` + `/`               |:new_moon:             |Toggle clipboard/scrap     |

### Search/Replace
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`Ctrl` + `F5`              |:new_moon:             |Ignore case on/off         |
|`Ctrl` + `Shift` + `K`     |:new_moon:             |Kiss matching brace        |
|`Ctrl` + `Shift` + `Q`     |:new_moon:             |Quick search for word      |
|`Ctrl` + `Shift` + `M`     |:new_moon:             |Multi-buffer Search again  |
|`Ctrl` + `F6`              |:new_moon:             |Regular expressions on/off |
|`Alt` + `T`                |:new_moon:             |Replace                    |
|`F6`                       |:new_moon:             |Replace                    |
|`Shift` + `F6`             |:new_moon:             |Replace                    |
|`Alt` + `S`                |:poodle:               |Search                     |
|`F5`                       |:poodle:               |Search                     |
|`Shift` + `F5`             |:poodle:               |Search again               | *use editor.action.addSelectionToNextFindMatch instead*

### Selections/Marks
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`Alt` + `M`                |:new_moon:             |Begin selection, inclusive |
|`Alt` + `A`                |:new_moon:             |Begin selection, exclusive |
|`Alt` + `C`                |:new_moon:             |Begin selection, column    |
|`Alt` + `L`                |:new_moon:             |Begin selection, line      |
|`Ctrl` + `A`               |:new_moon:             |Close/open Selection       |
|`Alt` + `J`                |:new_moon:             |Go to mark (prompt)        |
|`Alt` + *number*           |:new_moon:             |Set mark                   |

### System
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`F10`                      |:new_moon:             |API interface              |
|`Ctrl` + `W`               |:new_moon:             |Backups on/off             |
|`Alt` + `F10`              |:new_moon:             |Compile buffer             |
|`Ctrl` + `G`               |:new_moon:             |Display routines           |
|`Shift` + `Enter`          |:new_moon:             |Expand/Collapse            |
|`Ctrl` + `N`               |:new_moon:             |Next error                 |
|`Ctrl` + `P`               |:new_moon:             |Show errors                |
|`Alt` + `H`                |:new_moon:             |Help                       |
|`Alt` + `I`                |:new_moon:             |Insert mode on/off         |
|`F9`                       |:see_no_evil:          |Load DLL                   |
|`Alt` + `F7`               |:new_moon:             |Load recording file        |
|`F8`                       |:new_moon:             |Playback keystrokes        |
|`Alt` + `P`                |:new_moon:             |Print buffer               |
|`Alt` + `V`                |:new_moon:             |Print version              |
|`Alt` + `X`                |:new_moon:             |Quit with prompt           |
|`Ctrl` + `X`               |:new_moon:             |Quit with write            |
|`F7`                       |:new_moon:             |Record keys toggle         |
|`Ctrl` + `R`               |:new_moon:             |Repeat key action          |
|`Alt` + `Z`                |:new_moon:             |Shell                      |
|`Esc`                      |:new_moon:             |Text Mode                  |
|`Shift` + `F9`             |:see_no_evil:          |Unload DLL                 |
|`Alt` + `F8`               |:new_moon:             |Write recording file       |

### Window
| Command                   | Status                | Description               |
|---------------------------|-----------------------|---------------------------|
|`Alt` + `F1`               |:new_moon:             |Borders on/off             |
|`F3`                       |:new_moon:             |Create tiled edge          |
|`F4`                       |:new_moon:             |Delete tiled edge          |
|`F1`                       |:new_moon:             |Next window                |
|`F2`                       |:new_moon:             |Resize window              |
|`Shift` + `Left`           |:new_moon:             |Select window at left      |
|`Shift` + `Right`          |:new_moon:             |Select window at right     |
|`Shift` + `Up`             |:new_moon:             |Select window above        |
|`Shift` + `Down`           |:new_moon:             |Select window below        |
|`Alt` + `F2`               |:new_moon:             |Zoom/Unzoom window         |


## Known Issues

WIP.

## Release Notes

None so far.

-----------------------------------------------------------------------------------------------------------
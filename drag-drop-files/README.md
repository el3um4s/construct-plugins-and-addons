# DRAG AND DROP FILES

`Drag and drop files in Construct 3`

### Download

- [C3Addon](download/current/drag-drop-files.c3addon)
- Demo:
  - [drag-drop-files](download/demo/drag-drop-files.c3p)
  - [dictionary](download/demo/dictionary.c3p) (with a [demo json file](download/demo/dictionary-from-it-to-fr.json))

### Link

- Link to [c3addon](https://www.construct.net/en/make-games/addons/316/drag-drop-files)
- Demo:
  - [drag-drop-files](https://c3plugins.stranianelli.com/drag-drop-files/demo/drag-drop-files/)
  - [dictionary](https://c3plugins.stranianelli.com/drag-drop-files/demo/dictionary/)


### Short Description

Drag and drop files in Construct 3

![Screenshot1](images/readme/screenshot.gif)

![Screenshot2](images/readme/screenshot.jpg)

## ACEs

### APPEARANCE

#### Actions

- *Set text to {0}*: Set the control text.
- *Set visible{0}*: Hide or show the control

#### Expressions
- *Text*: the text


### CSS

#### Actions

- *Set CSS style {0} to {1}*: Set a CSS style on the control
- *Set background color to {0}, font color to {1} and border to {2}*: Set background color, font color and border
- *Set tooltip to {0}*: Set the element's tooltip
- *Set font face to {0} ({1} & {2})*: Set the font face used to display text.
- *Set font size to {0}*: Set the object's font Size.
- *Set font size to {0} in layer scale*: Set the object's font Size in layer scale.

#### Expressions

- *BackgroundColor*: Get the object's background color (CSS).
- *FontColor*: Get the object's font color (CSS).
- *Border*: Return the object's border (CSS).

### DRAG AND DROP

#### Actions

- *Release file {0}*: Release a file so it is no longer using memory

#### Conditions

- *On click*: Triggered when the bbject is clicked.
- *On Drop*: Fired when an element is dropped on a valid drop target.
- *On Drag Over*: Fired when an element is being dragged over a valid drop target.
- *On Drag Enter*: Fired when a dragged element enters a valid drop target.
- *On Drag Leave*: Fired when a dragged element leaves a valid drop target.
- *Is drag over*: Is dragging over
- *On mouse over*: On mouse over
- *On mouse Leave*: On mouse Leave
- *Is Mouse Over*: Is Mouse Over

**Deprecated**
- ~~*On Drag*: Fired when a file is being dragged.~~
- ~~*On Drag Exit*: Fired when an element is no longer the drag operation's immediate selection target.~~
- ~~*On Drag Start*: Fired when the user starts dragging an element.~~
- ~~*On Drag End*: Fired when a drag operation is being ended (for example, by releasing a mouse button or hitting the escape key).~~

#### Expressions

- *FileUrlAt*: A URL to access the data of the chosen file at an index.
- *FileCount*: The number of chosen files.
- *FileNameAt*: Name of chosen file at an index.
- *FileSizeAt*: Size of chosen file at an index.
- *FileTypeAt*: MIME type of chosen file at an index.
- *FileExtensionAt*: File Extensione of chosen file at an index.

### SIZE & POSITION

#### Actions

- *Set X to {0}*: Set the object's X co-ordinate
- *Set Y to {0}*: Set the object's X co-ordinate
- *Set width to {0}*: Set the object's width.
- *Set height to {0}*: Set the object's height.

#### Expressions

- *X*: Get the object's X co-ordinate, in pixels.
- *Y*: Get the object's Y co-ordinate, in pixels.
- *Width*: Get the object's width, in pixels.
- *Height*: Get the object's height, in pixels.

### FILES SELECTED

#### Actions

- *Clear file at index {0}*: Clear selection of the file at an index
- *Clear all files*: Clear all files selected

#### Expressions

- *Has file selected*: Check if some files are selected
- *Has only 1 file selected*: Check if only 1 file is selected

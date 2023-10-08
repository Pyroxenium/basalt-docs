---
outline: deep
---

# VisualObject

The VisualObject class is derived from the Object class and serves as the foundation for all visual components in Basalt. Visual objects include elements like frames, buttons, and text boxes. The VisualObject class provides methods for managing the appearance, position, size, and other visual properties of these components.

## Properties

|Property|Type|Description|
|---|---|---|
|Background|color|Background color of the object.
|Foreground|color|Foreground color or text color.
|X|number|Horizontal position of the object.
|Y|number|Vertical position of the object.
|width|number|Width of the object.
|height|number|Height of the object.
|visible|bool|Whether the object is visible or hidden.
|renderData|table|Data used during the rendering process.
|transparent|bool|Whether the object's background is transparent.
|ignoreOffset|bool|Ignores parent's offset when positioning.
|focused|bool|Whether the object currently has focus.

## Events

Events are actions or occurrences that happen during the execution of your program. In Basalt, objects can respond to various events, such as user interactions or changes in their properties.

|Name|Description|
|---|---|
|onClick|Fires when the object is clicked
|onClickUp|Fires when the mouse button is released on the object
|onScroll|Fires when scrolling with the mouse wheel
|onDrag|Fires when the object is being dragged
|onHover|CraftOS-PC - fires when the mouse hovers over an object
|onLeave|CraftOS-PC - fires when the mouse leaves an object
|onKey|Fires when the object is focused and a keyboard key is pressed
|onKeyUp|Fires when the object is focused and a keyboard key is released
|onChar|Fires when the object is focused and a character key is pressed
|onGetFocus|Fires when the object gains focus
|onLoseFocus|Fires when the object loses focus

# Menubar

Menubars are similar to lists but are displayed horizontally instead of vertically. They are ideal for creating user interfaces like taskbars in operating systems.

Dropdown inherit from [List](list), [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|spacing|number|Determines the space between each entry.

## Example

::: details Click to see example
```lua
local main = basalt.addFrame()
local menubar = main:addMenubar()
menubar:addItems({"File", "Edit", "View", "Help"})
```
:::

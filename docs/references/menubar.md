---
outline: deep
---

# Menubar

Menubars are similar to lists but are displayed horizontally instead of vertically. They are ideal for creating user interfaces like taskbars in operating systems, as they can be scrollable, allowing for endless entries.

## Properties

|Property|Type|Description|
|---|---|---|
|spacing|number|Determines the space between each entry

## Example

Here's a simple example to help you get started with creating a Menubar:

```lua
local main = basalt.addFrame()
local aMenubar = main:addMenubar()
aMenubar:addItems({"File", "Edit", "View", "Help"})
```

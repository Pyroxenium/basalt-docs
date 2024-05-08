# Borders

The Borders extension in Basalt adds customizable border properties to elements. This guide provides an overview of the properties available with the Borders extension and how to use them effectively.

## Properties

|Property|Type|Description|
|---|---|---|
|border|bool|Specifies whether the element has a border.
|borderClickable|bool|Specifies whether the border of the element is clickable (interactable).
|borderSides|table|Specifies which sides of the element have borders.
|borderType|string|Specifies the type of border to apply. Available options include "small" or "solid".
|borderColor|color|Specifies the color of the border.

## Methods

|Method|Returns|Description|
|---|---|---|
|setBorderSide|self|Sets the visibility of a specific border side for the element.
|getBorderSide|bool|Gets the visibility state of a specific border side for the element

## Usage

To use the Borders extension, simply apply the desired border properties to your elements. For example:

```lua
local main = basalt.getMainFrame()
local button = main:addButton()

button:setBorder(true):setBorderColor(colors.blue)
```
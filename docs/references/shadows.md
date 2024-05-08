# Shadows 

The Shadows extension in Basalt enhances the visual appearance of elements by adding shadows. This guide provides an overview of the properties available with the Shadows extension and how to use them effectively.

## Properties

|Property|Type|Description|
|---|---|---|
|shadow|bool|Specifies whether the element has a shadow.
|shadowDirection|bool|Specifies the direction of the shadow effect. Available options include "topLeft", "topRight", "bottomLeft", and "bottomRight".
|shadowColor|table|Specifies the color of the shadow.

To use the Shadows extension in Basalt, simply apply the desired shadow properties to your elements. For example:

```lua
local main = basalt.getMainFrame()
local frame = main:addFrame():setPosition(2, 2)

frame:setShadow(true):setShadowColor(colors.blue)
```
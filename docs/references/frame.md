# Frame

Frames are elements in Basalt used for organizing user interfaces. Unlike BaseFrames, Frames always require a parent container.

Frame inherit from [Container](container), [VisualElement](visualelement) and [BasicElement](element)

## Example

::: details Click to see example
```lua
local basalt = require("basalt")

local main = basalt.addFrame() -- This is a Baseframe
local subFrame = main:addFrame() -- This is a Frame

basalt.autoUpdate()
```
:::
---
outline: deep
---

# Frame

Frame is a subclass of the Container class and inherits from VisualObject and Object classes. Frame objects are used for grouping and organizing other objects within a parent object, providing structure to your interface. The main difference between Frame and BaseFrame is that Frame must always have a parent.

## Example

```lua
local basalt = require("basalt")

local main = basalt.addFrame()
local subFrame = main:addFrame()

basalt.autoUpdate()
```

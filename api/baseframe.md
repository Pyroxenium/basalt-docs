---
outline: deep
---

# BaseFrame

BaseFrame is a subclass of the Container class. The main difference between BaseFrame and other frame types is that BaseFrame does not have a parent. Usually the baseframe is the first object you need.

If you want to create a BaseFrame, you will have to use [basalt.addFrame](../api/basalt#basalt-addframe)

## Example

```lua
local basalt = require("basalt")

local main = basalt.addFrame()

basalt.autoUpdate()
```

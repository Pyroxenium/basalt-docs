# Baseframe

Base frames are fundamental elements in Basalt, typically the first element you need. They can be created using [basalt.addFrame](basalt.html#basalt-addframe). Base frames are unique in that they do not require a parent container. They occupy the entire screen. If you need a BaseFrame that doesn't occupy the entire screen, consider using CC:Tweaked's [Window API](https://tweaked.cc/module/window.html).

It's important to note that only one base frame can be active (visible) at a time. While you can create multiple base frames, only the currently active one listens to incoming events (except for some events like time-events and peripheral-events). To switch between BaseFrames, you can use [basalt.switchFrame](basalt.html#basalt-switchframe)

Baseframe inherit from [Container](container), [VisualElement](visualelement) and [BasicElement](element)

## Example

::: details Click to see example
```lua
local basalt = require("basalt")

local main = basalt.addFrame() -- a new baseframe is created.

basalt.autoUpdate()
```
:::
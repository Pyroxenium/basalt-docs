---
outline: deep
---

# BigMonitor

BigMonitor is a subclass of the BaseFrame class, tailored specifically for in-game monitors to showcase content. Unlike the standard Monitor, BigMonitor can render across multiple monitors, simulating a single expansive display.

## Properties

|Property|Type|Description|
|---|---|---|
|group|table|Table of multiple monitors

Here is a example of the Table layout for groups:

```lua
{
    [y1] = {"x1", "x2", "x3"}
    [y2] = {"x1", "x2", "x3"}
}
```

## Example

```lua
local basalt = require("basalt")

local monitor = basalt.addBigMonitor()

local monitorGroup = {
    [1] = {"monitor_1", "monitor_2"},
    [2] = {"monitor_3", "monitor_4"}
}

monitor:setGroup(monitorGroup)

basalt.autoUpdate()
```

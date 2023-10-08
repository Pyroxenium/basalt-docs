---
outline: deep
---

# Monitor

Monitor is a subclass of the BaseFrame class. It is specifically designed for use with in-game monitors, allowing you to display content on monitors. MonitorFrame inherits all methods from BaseFrame and provides additional functionality for working with in-game monitors.

## Properties

|Property|Type|Description|
|---|---|---|
|monitor|string/table|Specifies either the name or the object representation of the desired monitor to use.
|side|string|Indicates the orientation or position of the monitor, e.g., 'left', 'right', 'top', or 'bottom'.

## Example

```lua
local basalt = require("basalt")

local monitor = basalt.addMonitor()
monitor:setMonitor("top") -- automatically changes the side-property to top

basalt.autoUpdate()
```

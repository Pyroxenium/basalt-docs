# BigMonitor

Unlike the standard Monitor, BigMonitor has the capability to render across multiple monitors, simulating a single expansive display.

BigMonitor inherit from [Container](container), [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|group|table|A table specifying the arrangement of multiple monitors in the BigMonitor group. Each entry in the table represents a row, where the key indicates the Y-coordinate and the value is an array containing the X-coordinates of the monitors in that row.

### Example of the Table Layout for Groups:
```lua
{
    [y1] = {"x1", "x2", "x3"}
    [y2] = {"x1", "x2", "x3"}
}
```

## Example

::: details Click to see example
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
:::
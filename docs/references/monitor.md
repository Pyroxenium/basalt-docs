# Monitor

Monitors are special containers in Basalt designed for interaction with the peripheral device [Monitor](https://tweaked.cc/peripheral/monitor.html). They allow for displaying user interfaces on monitors and process touch events to convert them into mouse click events.

Monitors have specific properties and behaviors that differentiate them from other containers. They are intended exclusively for use with the [Monitor](https://tweaked.cc/peripheral/monitor.html) peripheral device and only function with it.

Monitor inherit from [Container](container), [VisualElement](visualelement) and [Element](element)

## Properties

|Property|Type|Description|
|---|---|---|
|monitor|string/table|Specifies either the name or the peripheral representation of the desired monitor to use.
|side|string|Indicates the orientation or position of the monitor, e.g., 'left', 'right', 'top', or 'bottom'.

## Example

::: details Click to see example
```lua
local basalt = require("basalt")

local monitor = basalt.addMonitor()
monitor:setMonitor("top") -- automatically changes the side-property to top and attaches the monitor on top.

basalt.autoUpdate()
```
:::
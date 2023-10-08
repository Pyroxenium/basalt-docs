---
outline: deep
---

# Basalt

This is the UI Manager and the starting point for your project. The following functions allow you to influence the default behavior of Basalt.

Before you can access Basalt, you need to add the following code on top of your file:

```lua
local basalt = require("basalt")
```

What this code does is it loads basalt into the project, and you can access it by using the variable called "basalt".

## basalt.autoUpdate

`basalt.autoUpdate` starts the event and draw handler for you. The listeners will run until you stop them.

### Parameters

1. `boolean` optional - if you use false as the first parameter it would stop the listeners. Using false is a synonym for `basalt.stop()`.

### Usage

```lua
local basalt = require("basalt")

local main = basalt.createFrame()
basalt.autoUpdate() -- Start the event and draw listeners

-- Some code here...

basalt.autoUpdate(false) -- Stop the event and draw listeners
```

## basalt.stop

This method stops the automatic draw and event handler that was started by `basalt.autoUpdate()`. `basalt.autoUpdate(false)` achieves the same result

### Usage

```lua
local basalt = require("basalt")

local main = basalt.createFrame()
basalt.autoUpdate() -- Start the event and draw listeners

-- Some code here...

basalt.stop() -- Stop the event and draw listeners
```

## basalt.addFrame

Creates a new base frame, which is essentially a frame without a parent. You can have as many base frames as you want, but only one can be active (visible) at a time. You can always switch between your base frames.

Only the currently active base frame listens to incoming events (except for some events like time-events and peripheral-events).

### Parameters

1. `string` id - optional (if you don’t set an ID, it will automatically create a UUID for you)

### Usage

```lua
local main1 = basalt.addFrame() -- Visible base frame on program start
local main2 = basalt.addFrame()
local main3 = basalt.addFrame()
main1:addButton()
    :setPosition(2, 2)
    :setText("Switch")
    :onClick(function()
        main2:show() -- this function automatically "hides" the first one and shows the second one
    end)
main2:addLabel()
    :setText("We are currently on main2")
basalt.autoUpdate()
```

## basalt.addMonitor

Creates a new monitor frame which can be used to display your UI onto a monitor.

### Parameters

1. `string` id - optional (if you don’t set an ID, it will automatically create a UUID for you)

### Usage

```lua
local monitorFrame = basalt.addMonitor()

monitorFrame:addButton()

basalt.autoUpdate()
```

## basalt.addBigMonitor

Creates a new big-monitor frame which can be used to display your UI onto a monitor.

### Parameters

1. `string` id - optional (if you don’t set an ID, it will automatically create a UUID for you)

### Usage

```lua
local bigMonitorFrame = basalt.addBigMonitor()

bigMonitorFrame:addButton()

basalt.autoUpdate()
```

## basalt.thread

The `basalt.thread`  module offers a mechanism to handle concurrent tasks within the Basalt framework. By using threads, developers can execute non-blocking operations, ensuring the UI remains responsive.

### Parameters

1. `function` The function intended for the coroutine

### Usage

```lua
-- Create a new thread
basalt.thread(function()
    while true do
        print("Hello World!")
        sleep(1) -- pause execution for 1 second
    end
end)

-- Start the Basalt event loop
basalt.autoUpdate()
```

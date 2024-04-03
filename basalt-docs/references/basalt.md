# Basalt

This is the UI Manager and the starting point for your project. The following functions allow you to influence the default behavior of Basalt.

Before you can access Basalt, you need to add the following code on top of your file:

```lua
local basalt = require("basalt")
```

What this code does is it loads basalt into the project, and you can access it by using the variable defined as "basalt".

## Methods

Here is a list with all available methods for basalt.

|Method|Returns|Description|
|---|---|---|
|[basalt.run](#basalt-run)|-|Starts the event/draw system.
|[basalt.stop](#basalt-stop)|-|Stops the event/draw system.
|[basalt.getMainFrame](#basalt-getmainframe)|BaseFrame|Returns or creates a BaseFrame.
|[basalt.addFrame](#basalt-addframe)|BaseFrame|Creates a new BaseFrame.
|[basalt.removeFrame](#basalt-removeframe)|boolean|Removes a frame.
|[basalt.switchFrame](#basalt-switchframe)|-|Switches to a new BaseFrame.
|[basalt.setFocusedFrame](#basalt-setfocusedframe)|-|Changes the focus between frames.
|[basalt.addMonitor](#basalt-addmonitor)|Monitor|Creates a new Monitor frame.
|[basalt.addBigMonitor](#basalt-addbigmonitor)|BigMonitor|Creates a new BigMonitor frame.
|[basalt.removeMonitor](#basalt-removemonitor)|boolean|Removes a monitor.
|[basalt.isKeyDown](#basalt-iskeydown)|boolean|Returns if a certain key is currently held down.
|[basalt.isMouseDown](#basalt-ismousedown)|boolean|Returns if a certain mouse button is currently held down.
|[basalt.onEvent](#basalt-onevent)|-|Adds a new event listener to basalt.
|[basalt.removeEvent](#basalt-removeevent)|-|Removes a event from basalts event listener.
|[basalt.thread](#basalt-thread)|Thread|Adds a new thread (coroutine) to basalt.
|[basalt.getElements](#basalt-getelements)|table|Returns a list of available elements.
|[basalt.getTerm](#basalt-getterm)|term|Returns the term used by basalt.
|[basalt.errorHandler](#basalt-errorhandler)|-|Handles all incoming errors.
|[basalt.create](#basalt-create)|object|Can create a new element.

## basalt.run <C content="basalt.run"/>

`basalt.run` starts the event and draw handler. The listeners will run until you stop them.

### Parameters

1. `boolean?` - if you use false as the first parameter it would stop the listeners. Using false is a synonym for `basalt.stop()`.

::: details Click to see example
```lua
local basalt = require("basalt")

local main = basalt.getMainFrame()

main:addButton():onClick(function()
    basalt.run(false) -- Stops the event and draw listeners
end)

basalt.run() -- Start the event and draw listeners
```
:::

## basalt.stop <C content="basalt.stop"/>

This method stops the automatic draw and event handler that was started by `basalt.run()`. `basalt.run(false)` achieves the same result

::: details Click to see example
```lua
local basalt = require("basalt")

local main = basalt.getMainFrame()

main:addButton():onClick(function()
    basalt.stop() -- Stops the event and draw listeners
end)

basalt.run() -- Start the event and draw listeners
```
:::

## basalt.getMainFrame <C content="basalt.getMainFrame"/>

Returns the current main frame, if there's no main frame it creates a new one

### Returns

1. `BaseFrame`

::: details Click to see example
```lua
local basalt = require("basalt")

local main = basalt.getMainFrame()

basalt.run()
```
:::

## basalt.addFrame <C content="basalt.addFrame"/>

Creates a new base frame, which is essentially a frame without a parent. You can have as many base frames as you want, but only one can be active (visible) at a time. You can always switch between your base frames.

Only the currently active base frame listens to incoming events (except for some events like time-events and peripheral-events).

### Parameters

1. `string?` id - if you don’t set an ID, it will automatically create a UUID for you

### Returns

1. `BaseFrame`

::: details Click to see example
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
basalt.run()
```
:::

## basalt.removeFrame <C content="basalt.removeFrame"/>

Removes the given frame from basalts listeners. This will ignore the BaseFrame in every way.

### Parameters

1. `string|BaseFrame` id or the object itself

### Returns

1. `boolean` if the frame got successfully removed

::: details Click to see example
```lua
local main = basalt.addFrame()
main:addButton()
    :onClick(function()
        basalt.removeFrame(main)
    end)
basalt.run()
```
:::

## basalt.switchFrame <C content="basalt.switchFrame"/>

With `basalt.switchFrame` you are able to switch to a new BaseFrame. 

### Parameters

1. `string|BaseFrame` The baseframe you want to switch to.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local second = basalt.addFrame()

second:addButton()

basalt.switchFrame(second)
```
:::

## basalt.setFocusedFrame <C content="basalt.setFocusedFrame"/>

This will change the focus between frames. It is mostly useful in combination with monitors. Mouse/Touch events also changes the focus for you.

### Parameters

1. `string|BaseFrame|Monitor|BigMonitor` The frame you want to switch to.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local monitor = basalt.addMonitor()

main:addButton():onClick(function()
    basalt.setFocusedFrame(monitor)
end)
```
:::

## basalt.addMonitor <C content="basalt.addMonitor"/>

Creates a new monitor frame which can be used to display your UI onto a monitor.

### Parameters

1. `string?` id - if you don’t set an ID, it will automatically create a UUID for you

### Returns

1. `Monitor`

::: details Click to see example
```lua
local monitorFrame = basalt.addMonitor()

monitorFrame:addButton()

basalt.run()
```
:::

## basalt.addBigMonitor <C content="basalt.addBigMonitor"/>

Creates a new big-monitor frame which can be used to display your UI onto a monitor.

### Parameters

1. `string?` id - if you don’t set an ID, it will automatically create a UUID for you

### Returns

1. `BigMonitor`

::: details Click to see example
```lua
local bigMonitorFrame = basalt.addBigMonitor()

bigMonitorFrame:addButton()

basalt.run()
```
:::

## basalt.removeMonitor <C content="basalt.removeMonitor"/>

Removes the given monitor from basalts listeners.

### Parameters

1. `string|Monitor|BigMonitor` id or the object itself

### Returns

1. `boolean` if the monitor got successfully removed

::: details Click to see example
```lua
local monitor = basalt.addMonitor()
monitor:addButton()
    :onClick(function()
        basalt.removeMonitor(monitor)
    end)
basalt.run()
```
:::

## basalt.isKeyDown <C content="basalt.isKeyDown"/>

This method returns if a certain key is currently held down. Please try to use the keys API. Here is a list:
[Computercraft Keys](https://github.com/cc-tweaked/CC-Tweaked/blob/master/src/main/resources/assets/computercraft/lua/rom/apis/keys.lua#L13)

### Parameters

1. `number` The key code

### Returns

1. `boolean`

::: details Click to see example
```lua
basalt.debug(basalt.isKeyDown(keys.leftCtrl))
```
:::

## basalt.isMouseDown <C content="basalt.isMouseDown"/>

`basalt.isMouseDown` returns if a mouse button is held down. 1 = left button, 2 = right button, 3 = middle button

### Parameters

1. `number` the mouse button

### Returns

1. `boolean`

::: details Click to see example
```lua
basalt.debug(basalt.isMouseDown(1))
```
:::

## basalt.onEvent <C content="basalt.onEvent"/>

`basalt.onEvent` is a core event listener, it doesn't matter which frame is active, this event listener receives all incoming events

### Parameters

1. `function` the function which gets called on any event

::: details Click to see example
```lua
basalt.onEvent(function(event, char)
    if(event=="char")then
        basalt.debug(char.."got pressed")
    end
end)
```
:::

## basalt.removeEvent <C content="basalt.removeEvent"/>

Removes the event from the event listener

### Parameters

1. `function` the function to remove

::: details Click to see example
```lua
local function personalEventHandler(event)
    basalt.debug(event)
end

basalt.onEvent(personalEventHandler)

main:addButton():onClick(function()
    basalt.removeEvent(personalEventHandler)
end)
```
:::

## basalt.thread <C content="basalt.thread"/>

The `basalt.thread` module offers a mechanism to handle concurrent tasks within the Basalt framework. By using threads, developers can execute non-blocking operations, ensuring the UI remains responsive.

### Parameters

1. `function` The function intended for the coroutine

### Returns

1. `Thread`

::: details Click to see example
```lua
-- Create a new thread
basalt.thread(function()
    while true do
        basalt.debug("Hello World!")
        sleep(1) -- pause execution for 1 second
    end
end)

-- Start the Basalt event loop
basalt.run()
```
:::

## basalt.getElements <C content="basalt.getElements"/>

Returns a list of all available elements.

### Returns

1. `table`

::: details Click to see example
```lua
for _,elements in pairs(basalt.getElements())do
    print(elements)
end
```
:::

## basalt.getTerm <C content="basalt.getTerm"/>

The main term, which gets defined once basalt gets required.

### Returns

1. `term`

::: details Click to see example
```lua
local main = basalt.getMainFrame()

main:addButton():onClick(function()
    basalt.debug(basalt.getTerm())
end)

basalt.run()

```
:::

## basalt.errorHandler <C content="basalt.errorHandler"/>

This is basalt's default error handler. The reason this is public is, because you can overwrite it if you want. Just make sure to use
`basalt.stop()` to stop basalt.

### Parameters

1. `string` The error message to show

::: details Click to see example
```lua
basalt.errorHandler = function(errMsg)
    basalt.stop()
    term.clear()
    term.setCursorPos(1,1)
    term.setBackgroundColor(colors.red)
    term.setTextColor(colors.black)
    print(errMsg)
    term.setTextColor(colors.white)
```
:::

## basalt.create <C content="basalt.create"/>

This is used to create new elements.

### Parameters

1. `string` The id of the element
2. `Container?` The error message to show
3. `type` The element type you want to create
4. `defaultProperties?` A table with default properties

### Returns

1. `object` The element

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = basalt.create("RandomId", nil, "Button")
button:setParent(main)
```
:::
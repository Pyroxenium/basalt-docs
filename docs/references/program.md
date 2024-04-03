# Program

The Program element facilitates launching and managing programs within basalt windows.

Program inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|program|object|Contains a Basalt Program object.

## Methods

|Method|Returns|Description|
|---|---|---|
|[start](#start)|self|Starts the program.
|[stop](#stop)|self|Stops the program.

## start <C content="start"/>

Initiates the execution of the program.

### Parameters

1. `string` Path to the program

### Returns

1. `self`

::: details Click to see example
```lua
local mainFrame = basalt.getMainFrame()
local program = mainFrame:addProgram()

program:start("path/to/your/program.lua")
```
:::

## stop <C content="stop"/>

Terminates the execution of the program.

### Returns

1. `self`

::: details Click to see example
```lua
local mainFrame = basalt.getMainFrame()
local program = mainFrame:addProgram()

program:start("path/to/your/program.lua")
program:onClick(function(self)
    self:stop()
end)
```
:::

---
outline: deep
---

# Program

Program objects allow you to execute other programs within your main application. You can run programs such as worms, shell, or any custom programs you’ve created.

## Properties

|Property|Type|Description|
|---|---|---|
|program|object|The internal program object

## start

Starts a existing program

### Parameters

1. `string` Path to the program

### Returns

1. `object` The object in use

### Usage

```lua
local mainFrame = basalt.addFrame()
local aProgram = mainFrame:addProgram()

aProgram:start("path/to/your/program.lua")
```

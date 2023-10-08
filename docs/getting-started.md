---
outline: deep
---

# Getting Started

The Basalt UI Framework is a powerful tool to create interactive user interfaces with ease. Whether you're a beginner or an experienced developer, this guide will help you get started with the Basalt framework.

## How to Install

To download the UI Framework, use the following command:

```
wget run https://basalt.madefor.cc/install.lua packed
```

Input the command into your shell, and after execution, you should see a file named `basalt.lua` in your directory. This file serves as the main entry point to the framework.

## Setting up Basalt

The next step is to include and initialize the Basalt framework in your project.

Here's the code to load basalt into your project.

```lua
local basalt = require("basalt")
```

Merely loading Basalt is insufficient. It's essential to initiate the event and draw handlers. To facilitate this, Basalt offers the `basalt.autoUpdate()` function.

Here is a example:

```lua
local basalt = require("basalt")

-- your UI code is here

basalt.autoUpdate()
```

## Creating a Basic UI

Now that you have Basalt set up, you can start building your UI. For the sake of simplicity, let's create a basic frame with a single button.

```lua
local basalt = require("basalt") --> Load the Basalt framework into the variable called "basalt"

--> Now we want to create a base frame, we call the variable "main" - by default everything you create is visible. (you don't need to use :show())
local main = basalt.createFrame()

local button = main:addButton() --> Here we add our first button
button:setPosition(4, 4) -- We want to change the default position of our button
button:setSize(16, 3) -- And the default size.
button:setText("Click me!") --> This method sets the text displayed on our button

local function buttonClick() --> Create a function we want to call when the button gets clicked 
    basalt.debug("I got clicked!")
end

-- Now we just need to register the function to the button's onClick event handlers, this is how we can achieve that:
button:onClick(buttonClick)

basalt.autoUpdate() -- As soon as we call basalt.autoUpdate, the event and draw handlers will listen to any incoming events (and draw if necessary)
```

If you strive for succinct and beautiful code, here’s a cleaner implementation of the code above:

```lua
local basalt = require("basalt")

local main = basalt.createFrame()
local button = main --> Basalt returns an instance of the object on most methods, to make use of "call-chaining"
        :addButton() --> This is an example of call chaining
        :setPosition(4, 4)
        :setText("Click me!")
        :onClick(
            function()
                basalt.debug("I got clicked!")
            end)

basalt.autoUpdate()
```

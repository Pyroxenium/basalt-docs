---
outline: deep
---

# Getting Started

Here we will talk about basic stuff, we'll start with how to install basalt and then we will make a simple UI. We'll then continue by creating a Button, followed by an Input field, and then a List. Additionally, we'll cover how to retrieve values from these UI elements.

## How to Install

To download the UI Framework, use the following command:

```
wget run https://basalt.madefor.cc/install.lua
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


## Creating a Simple UI with Basalt

Now that you have Basalt installed, let's dive into creating a basic user interface (UI).

### Creating a Button

To create a Button in Basalt, you can use the `:addButton()` function. The :addButton() function only works on frames:

```lua
local basalt = require("basalt")
local main = basalt.getMainFrame()

local button = main:addButton()
```

This code snippet creates a Button and adds it to the main frame of your UI. You can customize the appearance and behavior of the button as needed. 

Here are some common customizations you can apply:

- **Position:** You can set the position of the button using the `:setPosition()` function.
- **Size:** Adjust the size of the button using the `:setSize()` function.
- **Background:** Change the background color or image of the button with the `:setBackground()` function.
- **Foreground (Text):** Modify the text color of the button using the `:setForeground()` function.

Here's an example of how you can apply these customizations:

```lua
local basalt = require("basalt")
local main = basalt.getMainFrame()

local button = main:addButton()
button:setPosition(5, 3) -- Set position to (5, 3)
button:setSize(20, 3) -- Set size to width: 20, height: 3
button:setBackground(colors.blue) -- Set background color to blue
button:setForeground(colors.white) -- Set text color to white
```

With these functions, you can tailor the appearance and behavior of the button to suit your application's design requirements.

___

### Creating an Input Field

To create an Input field in Basalt, you can use the `:addInput()` function:

```lua
local input = main:addInput()
```

Once you have created the Input field, you can customize its appearance and behavior to fit your UI design.

Here are some common customizations you can apply to the Input field:

- **Position:** You can set the position of the button using the `:setPosition()` function.
- **Size:** Adjust the size of the button using the `:setSize()` function.
- **Background:** Change the background color or image of the button with the `:setBackground()` function.
- **Foreground (Text):** Modify the text color of the button using the `:setForeground()` function.
- **PlaceholderText (Text):** Modify the text color of the button using the `:setPlaceholderText()` function.


Here's an example of how you can create and customize an Input field:

```lua
local input = main:addInput()
input:setPosition(3, 3) -- Set position to (3, 3)
input:setSize(12, 1) -- Set size to width: 12, height: 1
input:setBackground("black") -- Set background color to light gray
input:setForeground("lightgray") -- Set text color to light gray
input:setPlaceholder("Enter text here...") -- Set placeholder text
input:setValue("Initial value") -- Set initial value
```

#### Retrieving Values from Input Fields

Once you've created an Input field, you may want to retrieve the value entered by the user. Basalt provides an `:onChange(func)` event handler for this purpose.

Here's how you can use the `:onChange(func)` event handler to retrieve the value from an Input field:

```lua
input:onChange(function(self, value)
    basalt.debug("Input value changed to: " .. value)
end)
```

In this example, whenever the value in the Input field changes, the provided function is called with the updated value as its argument. You can then perform any necessary actions with the value, such as updating other UI elements or processing data.

Additionally, if you need to retrieve the current value of the Input field programmatically at any point, you can use the `:getValue()` method:

```lua
local inputValue = input:getValue()
basalt.debug("Current value of Input field: " .. inputValue)
```

This method returns the current value of the Input field, allowing you to access it within your Lua code.

Combining the `:onChange(func)` event handler with the `:getValue()` method gives you full control over retrieving and managing the values entered by the user in Input fields.

___

### Creating a List

To create a List in Basalt, you can use the `:addList()` method:

```lua
local list = main:addList()
```

Once you've created the List, you can populate it with items dynamically or statically to suit your application's requirements.

Here's an example of how you can add items to the List:

```lua
list:addItem("Item 1")
list:addItem("Item 2")
list:addItem("Item 3")
```

This code snippet adds three items to the List with the labels "Item 1", "Item 2", and "Item 3". You can customize the appearance and behavior of the List items as needed.

#### Handling List Selection Changes

Basalt provides an `:onChange(func)` event handler for List elements to handle selection changes. This event is triggered whenever the user selects a different item in the List.

Here's how you can use the `:onChange(func)` event handler to respond to List selection changes:

```lua
list:onChange(function(self, selectedItem)
    basalt.debug("Selected item changed to: " .. selectedItem)
end)
```

In this example, whenever the user selects a different item in the List, the provided function is called with the label of the newly selected item as its argument.


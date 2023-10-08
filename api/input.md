---
outline: deep
---

# Input

Input objects allow you to create a field where the user can enter text.

## Properties

|Property|Type|Description|
|---|---|---|
|value|string|The current text inside the input field
|cursorIndex|number|Position of the cursor within the text
|scrollIndex|number|The index from which the visible text starts, useful for longer inputs
|inputLimit|number|Maximum number of characters the input field can accept
|inputType|string|Defines the nature of input, e.g., 'text', 'password', 'number'

## Example

In this example, we create a main frame and add an Input object. We then set an input limit, and specify that this is a password field:

```lua
local main = basalt.createFrame()
local userInput = main:addInput()

userInput:setInputLimit(12)
userInput:setInputType("password")
```

This example highlights the creation of a password input field with a character limit.

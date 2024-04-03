# Input

Input elements allow users to enter text or data. They are commonly used in forms and text entry fields to gather user input.

Input inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|value|string|The current text inside the input field.
|cursorIndex|number|Position of the cursor within the text.
|scrollIndex|number|The index from which the visible text starts, useful for longer inputs.
|inputLimit|number|Maximum number of characters the input field can accept.
|inputType|string|Defines the nature of input, e.g., 'text', 'password', 'number'.
|placeholderText|string|Placeholder text, which is beeing displayed when there's no value.
|placeholderColor|color|Text color for placedholder text.
|placeholderBackground|color|Background color for placeholder text.

## Events 

|Method|Returns|Description|
|---|---|---|
|[onChange](#onchange)|self|Gets triggered as soon as the value changes.

## Methods 

|Method|Returns|Description|
|---|---|---|
|[setPlaceholder](#setplaceholder)|self|Changes placeholder text, color and background.
|[getPlaceholder](#getplaceholder)|multiple|Returns placeholder text, color and background.

## Example

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local userInput = main:addInput()

userInput:setInputLimit(12)
userInput:setInputType("password")
```
:::

## onChange <C content="onChange"/>

Registers a new custom event listener which triggers on value change.

### Parameters

1. `function` - The function to call when the event triggers.

### Returns

1. `self` - The element itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local input = main:addInput()

local function valueChange(self, value)
    basalt.debug("Value has changed to "..value)
end

input:onChange(valueChange)
```
:::

## setPlaceholder <C content="setPlaceholder"/>

Changes the placeholder text, color and background.

### Parameters

1. `string` - The placeholder text.
2. `color?` - The text color of the placeholder text.
3. `color?` - The background color.

### Returns

1. `self` - The element itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:addInput():setPlaceholder("...", colors.gray)
```
:::

## getPlaceholder <C content="getPlaceholder"/>

Returns the placeholder text, color and background.

### Returns

1. `string` - The placeholder text.
2. `color` - The text color of the placeholder text.
3. `color` - The background color.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local input = main:addInput():setPlaceholder("...", colors.gray)
basalt.debug(input:getPlaceholder())
```
:::
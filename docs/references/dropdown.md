# Dropdown

Dropdowns are interactive elements that provide users with a selection of options. When activated, by clicking on a button, a list of items appears, allowing the user to choose one.

Dropdown inherit from [List](list), [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|opened|bool|Indicates if the dropdown list is currently visible.
|dropdownHeight|number|The maximum height of the dropdown list when opened.
|dropdownWidth|number|The width of the dropdown list.

## Example

::: details Click to see example
```lua
local main = basalt.addFrame()
local dropdown = main:addDropdown()

-- Adding items to the dropdown
dropdown:setItems({"Option 1", "Option 2", "Option 3"})
```
:::
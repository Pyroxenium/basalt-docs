---
outline: deep
---

# Dropdown

Dropdowns are objects where the user can click on a button, which opens a list from which the user can choose an item.

## Properties

|Property|Type|Description|
|---|---|---|
|opened|bool|Indicates if the dropdown list is currently visible
|dropdownHeight|number|The maximum height of the dropdown list when opened
|dropdownWidth|number|The width of the dropdown list

## Example

The following example demonstrates how to create a Dropdown object:

```lua
local main = basalt.addFrame()
local myDropdown = main:addDropdown()

-- Adding items to the dropdown
myDropdown:setItems({"Option 1", "Option 2", "Option 3"})
```

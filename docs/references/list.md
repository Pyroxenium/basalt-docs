---
outline: deep
---

# List

Lists are objects that allow you to create a collection of entries from which the user can make a selection.

## Properties

|Property|Type|Description|
|---|---|---|
|items|table|A collection of entries to be displayed in the list
|selectedIndex|number|he index of the currently selected item in the list
|selectionBackground|color|Background color of the selected item
|selectionForeground|color|Foreground/text color of the selected item
|scrollIndex|number|Indicates the first visible item in a scrollable list

## Example

Here's an example showcasing how to create a List object, populate it with items, and retrieve the selected item:

```lua
local main = basalt.addFrame()
local myList = main:addList()

-- Adding items to the list
myList:setItems({"Item 1", "Item 2", "Item 3", "Item 4"})

-- Retrieving the selected item's value
local selectedItem = myList.items[myList.selectedIndex]
basalt.debug(selectedItem)
```

## addItem

Adds a item into the list.

### Parameters

1. `string` The entry name

### Returns

1. `object` The object in use

### Usage

```lua
local mainFrame = basalt.addFrame()
local aList = mainFrame:addList()
aList:addItem("1. Entry")
aList:addItem("2. Entry")
aList:addItem("3. Entry")
```

## removeItem

Removes an item from the list

### Parameters

1. `string` The name of the item

### Returns

1. `object` The object in use

### Usage

```lua
local mainFrame = basalt.addFrame()
local aList = mainFrame:addList()
aList:addItem("1. Entry")
aList:addItem("2. Entry")
aList:addItem("3. Entry")
aList:removeItem("2. Entry")
```

## removeItemByIndex

Removes an item from the list by its id

### Parameters

1. `number` The id of the item

### Returns

1. `object` The object in use

### Usage

```lua
local mainFrame = basalt.addFrame()
local aList = mainFrame:addList()
aList:addItem("1. Entry")
aList:addItem("2. Entry")
aList:addItem("3. Entry")
aList:removeItemByIndex(2)
```

## selectItem

Selects an item from the list

### Parameters

1. `string` The name of the item

### Returns

1. `object` The object in use

### Usage

```lua
local mainFrame = basalt.addFrame()
local aList = mainFrame:addList()
aList:addItem("1. Entry")
aList:addItem("2. Entry")
aList:addItem("3. Entry")
aList:selectItem("2. Entry")
```

## selectItemByIndex

Selects an item from the list by its id

### Parameters

1. `number` The id of the item

### Returns

1. `object` The object in use

### Usage

```lua
local mainFrame = basalt.addFrame()
local aList = mainFrame:addList()
aList:addItem("1. Entry")
aList:addItem("2. Entry")
aList:addItem("3. Entry")
aList:selectItemByIndex(2)
```

## getSelectedItem

Returns the currently selected item

### Returns

1. `string` The name of the item

### Usage

```lua
local mainFrame = basalt.addFrame()
local aList = mainFrame:addList()
aList:addItem("1. Entry")
aList:addItem("2. Entry")
aList:addItem("3. Entry")
basalt.debug(aList:getSelectedItem())
```

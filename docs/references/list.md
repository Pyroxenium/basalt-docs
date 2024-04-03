# List

Lists are interactive elements in Basalt used for displaying a collection of items in a vertical layout. They allow users to select items from the list and trigger actions associated with them.

List inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|items|table|A collection of entries to be displayed in the list.
|itemsForeground|table|A collection of foreground colors for each entry in the list.
|itemsBackground|table|A collection of background colors for each entry in the list.
|selection|boolean|Enables or disables the possibility to select items.
|multiSelection|boolean|Indicates whether multiple items can be selected in the list.
|autoScroll|boolean|Indicates whether the list automatically scrolls to keep the newest entry visible.
|selectedIndex|number|The index of the currently selected item in the list.
|selectionBackground|color|The background color of the selected item in the list.
|selectionForeground|color|The foreground/text color of the selected item in the list.
|scrollIndex|number|The scrolling offset of the list.

## Methods

|Method|Returns|Description|
|---|---|---|
|[addItem](#additem)|self|Adds an item to the list.
|[removeItem](#removeitem)|self|Removes an item from the list.
|[removeItemByIndex](#removeitem)|self|Removes an item from the list by index.
|[selectItem](#selectitem)|self|Selects an item in the list.
|[selectItemByIndex](#selectitembyindex)|self|Selects an item in the list by index.
|[getSelectedItems](#getselecteditems)|table|Returns a table containing the selected items in the list.
|[clear](#clear)|self|Removes all items from the list.
|[updateColor](#updatecolor)|self|Updates the color of a item.
|[getSelectionState](#getselectionstate)|boolean|Returns the selection state of the item at the given index.

## Example

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local myList = main:addList()

-- Adding items to the list
myList:setItems({"Item 1", "Item 2", "Item 3", "Item 4"})

-- Retrieving the selected item's value
local selectedItem = myList.items[myList.selectedIndex]
basalt.debug(selectedItem)
```
:::

## addItem <C content="addItem"/>

Adds an item to the list.

### Parameters

1. `string` The item to add to the list

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("1. Entry")
list:addItem("2. Entry")
list:addItem("3. Entry")
```
:::

## removeItem <C content="removeItem"/>

Removes an item from the list.

### Parameters

1. `string` The name of the item.

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("1. Entry")
list:addItem("2. Entry")
list:addItem("3. Entry")
list:removeItem("2. Entry")
```
:::

## removeItemByIndex <C content="removeItemByIndex"/>

Removes an item from the list by its index.

### Parameters

1. `number` The index of the item to remove

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("1. Entry")
list:addItem("2. Entry")
list:addItem("3. Entry")
list:removeItemByIndex(2)
```
:::

## selectItem <C content="selectItem"/>

Selects an item in the list.

### Parameters

1. `string` The item to select.

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("1. Entry")
list:addItem("2. Entry")
list:addItem("3. Entry")
list:selectItem("2. Entry")
```
:::

## selectItemByIndex <C content="selectItemByIndex"/>

Selects an item in the list by its index.

### Parameters

1. `number` The index of the item to select.

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("1. Entry")
list:addItem("2. Entry")
list:addItem("3. Entry")
list:selectItemByIndex(2)
```
:::

## getSelectedItems <C content="getSelectedItems"/>

Returns a table containing the selected items in the list.

### Returns

1. `table` A table containing the selected items.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("1. Entry")
list:addItem("2. Entry")
list:addItem("3. Entry")
basalt.debug(list:getSelectedItem()[1])
```
:::

## clear <C content="clear"/>

Removes all items from the list.

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("Item 1")
list:addItem("Item 2")
list:clear()
```
:::

## updateColor <C content="updateColor"/>

Updates the color of an item in the list.

### Parameters

1. `number` The index of the item to change.
1. `color` The foreground color.
1. `color` The background color.

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("Item 1")
list:updateColor(1, colors.red, colors.blue)
```
:::

## getSelectionState <C content="getSelectionState"/>

Returns the selection state of the item at the given index.

### Parameters

1. `number` The index of the item.

### Returns

1. `boolean` if the item is currently selected or not.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()
list:addItem("Item 1")
list:addItem("Item 2")
local selectionState = list:getSelectionState(1)
basalt.debug(selectionState)
```
:::

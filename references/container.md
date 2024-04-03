# Container

Container is the base class for all frame types. It provides the basic structure and functionality for all frame elements. Container elements can contain other container elements, thus forming the foundation for the hierarchy of frame elements.

Container inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|children|table|A list containing all child elements within the container.
|childrenByName|table|A mapping of child elements by their respective names.
|childrenEvents|table|A collection of events associated with child elements.
|cursorBlink|bool|Indicates if the cursor blinks when a container is focused.
|cursorColor|color|The color of the cursor within the container.
|cursorX|number|The X-coordinate of the cursor within the container.
|cursorY|number|The Y-coordinate of the cursor within the container.
|focusedChild|element|The currently focused child element within the container.
|elementsSorted|bool|Indicates if the child elements in the container are sorted.
|xOffset|number|Horizontal offset for positioning child elements within the container.
|yOffset|number|Vertical offset for positioning child elements within the container.

# Methods

|Methods|Returns|Description|
|---|---|---|
|[getVisibleChildren](#getvisiblechildren)|table|Returns a table containing all visible child elements within the container.
|[isChildVisible](#ischildvisible)|boolean|Returns a boolean value indicating whether the specified child element is visible within the container.
|[forceVisibleChildrenUpdate](#forcevisiblechildrenupdate)|self|Forces to update all child elements within the container.
|[getChild](#getchild)|element|Returns the specified child element within the container.
|[addChild](#addchild)|self|Adds a child element to the container.
|[removeChild](#removechild)|self|Removes a child element from the container.
|[isEventRegistered](#iseventregistered)|self|Checks if a certain event is registered for a child.
|[addEvent](#addevent)|self|Adds an event for a child.
|[removeEvent](#removeevent)|self|Removes an event from the container, bound to a child.
|[getVisibleChildrenEvents](#getvisiblechildrenevents)|table|Returns all visible children of the container for a certain event.
|[updateChild](#updatechild)|self|Updates the z-position of a specific child element.
|[setCursor](#setcursor)|self|Sets the cursor position within the container.
|[add{Element}](#add-element)|element|Adds a specific type of element (e.g., addButton, addFrame, addInput, addLabel) to the container.

## getVisibleChildren <C content="getVisibleChildren"/>

Returns a table containing all visible child elements within the container.

### Returns

1. `table` visible children

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:addButton()
local visibleChildren = main:getVisibleChildren()
```
:::

## isChildVisible <C content="getVisibleChildren"/>

Checks whether the specified child element is visible within the container.

### Parameters

1. `element` (element): The child element to check for visibility

### Returns

1. `boolean` true if its visible, otherwise false

### Usage

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()
local isVisible = main:isChildVisible(button)
```
:::

## forceVisibleChildrenUpdate <C content="forceVisibleChildrenUpdate"/>

Forces an update of the render-data for all child elements within the container. Elements won't re-render if nothing has changed, this would force them to re-render.

### Returns

1. `self`

### Usage

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:addButton()
local visibleChildren = main:getVisibleChildren()
```
:::

## getChild <C content="getChild"/>

Returns the specified child element within the container.

### Parameters

1. `string` id - The ID of the element.

### Returns

1. `element` The specified child element.

### Usage

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:addButton("Button1")

-- some code

local button = main:getChild("Button1")
```
:::

## addChild <C content="addChild"/>

Adds a child element to the container.

### Parameters

1. `element` The child element to add.

### Returns

1. `element` The element in use.

### Usage

::: details Click to see example
```lua
local main = basalt.getMainFrame()

local button = basalt.create("Button1", nil, "Button")

main:addChild(button)
```
:::

## removeChild <C content="removeChild"/>

Removes a child element from the container.

### Parameters

1. `element` The child element to remove.

### Returns

1. `self` The container itself

### Usage

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()
main:removeChild(button)
```
:::

## isEventRegistered <C content="isEventRegistered"/>

Checks if a certain event is registered for a child

### Parameters

1. `string` The name of the event to check.

### Returns

1. `boolean` Indicates whether the event is registered for a child

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()
main:removeChild("mouse_click")
```
:::

## addEvent <C content="addEvent"/>

Adds an event for a child. This will tell the container to send certain events to a children element.

::: warning
Basalt automatically registers children events for you.
:::

### Parameters

1. `string` The name of the event to add.

### Returns

1. `self` The container itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()
main:addEvent("mouse_scroll") -- Button will start to listen to mouse_scroll events, but there is no mouse_scroll handler for buttons.
```
:::

## removeEvent <C content="removeEvent"/>

Removes an event from the container, bound to a child.

### Parameters

1. `string` The name of the event to remove.
2. `element` The child element.

### Returns

1. `self` The container itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()
main:removeEvent("mouse_click", button) -- button stops listening to click events
```
:::

## getVisibleChildrenEvents <C content="getVisibleChildrenEvents"/>

Returns all visible children of the container for a certain event.

### Parameters

1. `string` The name of the event.

### Returns

1. `self` The container itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local childrenWithClickEvent = main:getVisibleChildrenEvents("mouse_click")
```
:::

## updateChild <C content="updateChild"/>

Updates the z-position of a specific child element. If certain elements have the same z-position, this method will
remove and re-add the specific element in the same z-index table.

### Parameters

1. `string|element` The child element to update.

### Returns

1. `self` The container itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button1 = main:addButton()
local button2 = main:addButton()
main:updateChild(button1)
```
:::

## setCursor <C content="setCursor"/>

Sets the cursor position within the container. This method is used by input or textfield elements.

### Parameters

1. `boolean` If the cursor should be active.
2. `number?` The x-coordinate of the cursor.
3. `number?` The x-coordinate of the cursor.
4. `color?` The color of the cursor.

### Returns

1. `self` The container itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:setCursor(true, 2, 2, colors.red)
```
:::

## add\{Element\} <C content="addButton"/>

Adds a specific type of element (e.g., addButton, addFrame, addInput, addLabel) to the container.

### Parameters

1. `string|table` The name of the element or a table containing default properties.

### Returns

1. `self` The container itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button1 = main:addButton("Button1")
local button2 = main:addButton({name="Button2",x=3,y=4,width=16,height=3,text="Click me!"})
```
:::


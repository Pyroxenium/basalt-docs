# Element

The Element class is the fundamental building block class in Basalt, from which all other elements are derived. You can think of it as the “origin” of all elements within the framework. The Element class provides essential functions that are common to all derived elements, such as adding and removing event listeners and managing inheritance and relationships between elements.

In simple terms, the Element class is like a common ancestor that passes down basic functions and properties to all subsequent elements. This makes it easier to keep the behavior of elements throughout the framework consistent and predictable.

## Properties
|Property|Type|Description|
|---|---|---|
|enabled|boolean|Controls whether the event listeners are active. When set to true, event operations related to the element are processed.
|parent|Container|References the parent element that this element is nested within, if any.
|events|table|A table storing event handlers associated with this element.
|propertyObservers|table|A table holding observer functions that get triggered when specific properties of the element change. Useful for reactivity and updating related UI elements.
|name|string|A unique identifier or label for the element, which can be useful for debugging or for referencing the element programmatically.
|type|string|Describes the kind or category of the element, such as "button", "input", "label", etc.
|z|number|Represents the elements's depth or layering order in the UI. Higher values will render the element on top of those with lower values, allowing for control over overlapping elements.

## Methods

|Method|Returns|Description|
|---|---|---|
|[getProperty](#getproperty)|any|Returns a property value.
|[setProperty](#setproperty)|self|Sets a property's value.
|[hasProperty](#hasproperty)|boolean|Checks if a property exists for the element.
|[setProperties](#setproperties)|self|Sets multiple properties for a element at once.
|[getProperties](#getproperties)|table|Retrieves all properties and their values for a element.
|[getPropertyType](#getpropertytype)|string|Retrieves the data type of a specified property for a element.
|[addPropertyObserver](#addpropertyobserver)|self|Adds an observer function to monitor changes to a specific property of a element.
|[removePropertyObserver](#removepropertyobserver)|self|Removes an observer function from monitoring changes to a specific property of a element.
|[forcePropertyObserverUpdate](#forcepropertyobserverupdate)|self|Forces an update of all property observers for a element.
|[fireEvent](#fireevent)|self|Fires an event associated with the element.
|[isType](#istype)|boolean|Checks if the element belongs to a specified type.
|[updateEvents](#updateevents)|self|Updates all events associated with the element.

## getProperty <C content="getProperty"/>

Retrieves the value of a specified property for a element.

### Parameters

1. `string` the name of the property

### Returns

1. `any` the value of the specified property. The type of the returned value depends on the nature of the property (e.g., it could be a string, number, table, etc.).

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

-- Retrieve and print the 'name' property of the button
local propertyName = button:getProperty("name")
basalt.debug(propertyName)
```
:::

## setProperty <C content="setProperty"/>

Sets the value of a specified property for a element.

### Parameters

1. `string` The name of the property you wish to set.
2. `any`The value you want to assign to the specified property. The type of this parameter should match the expected type for the property in question (e.g., string, number, table, etc.).

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

-- Set the 'name' property of the button to a new value
button:setProperty("name", "MyButton")

-- For demonstration, retrieve and print the updated 'name' property
local updatedPropertyName = button:getProperty("name")
basalt.debug(updatedPropertyName)
```
:::

## hasProperty <C content="hasProperty"/>

Checks if a property exists for the element.

### Returns

1. `boolean` true if the property exists, false otherwise.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

-- Check if the 'name' property exists for the button
local hasNameProperty = button:hasProperty("name")
basalt.debug(hasNameProperty)
```
:::

## setProperties <C content="setProperties"/>

Sets multiple properties for an element at once.

### Parameters

1. `table` A table containing key-value pairs of properties and their corresponding values.

### Returns

1. `self` The element itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

-- Set multiple properties for the button
button:setProperties({
    name = "MyButton",
    x = 3,
    y = 5,
    width = 16,
    height = 3,
})
```
:::

## getProperties <C content="getProperties"/>

Retrieves all properties and their values for an element.

### Returns

1. `table` Retrieves all properties and their values for an element.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

-- Retrieve all properties and their values for the button
local properties = button:getProperties()
basalt.debug(properties) -- Output: {name = uuid, enabled = true, x = 1, y = 1, width = 12, height = 3, ...}
```
:::

## getPropertyType <C content="getPropertyType"/>

Retrieves the data type of a specified property for an element.

### Parameters

1. `string` The name of the property.

### Returns

1. `string` The data type of the specified property

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

-- Retrieve the data type of the 'background' property for the button
local propertyType = button:getPropertyType("background")
basalt.debug(propertyType) -- Output: "color"
```
:::

## addPropertyObserver <C content="addPropertyObserver"/>

Adds an observer function to monitor changes to a specific property of an element. The Observer System is mainly used by the dynamic values extension.

### Parameters

1. `string` The name of the property to observe.
2. `function` The observer function to call when the property changes.

### Returns

1. `self` The element itself.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

-- Define an observer function
local function backgroundObserver(value)
    basalt.debug("Button background changed to: " .. tostring(value))
end

-- Add the observer function to monitor changes to the 'background' property of the button
button:addPropertyObserver("background", backgroundObserver)

-- Now, whenever the 'background' property of the button changes, the observer function will be called
button:setProperty("background", colors.red) -- Output: "Button background changed to: 16384"
```
:::

## removePropertyObserver <C content="removePropertyObserver"/>

Removes an observer function from monitoring changes to a specific property of an element.

### Parameters

1. `string` The name of the property being observed.
2. `function|number` The observer function to remove, or the index in the table.

### Returns

1. `self` The element itself.

::: details Click to see example
```lua
-- Assuming 'backgroundObserver' was previously added as an observer for the 'background' property of the button
button:removePropertyObserver("background", backgroundObserver)
```
:::

## forcePropertyObserverUpdate <C content="forcePropertyObserverUpdate"/>

Forces an update of all property observers for an element. This can be used by users, but it is mainly meant for internal usage.

### Returns

1. `self` The element itself.

::: details Click to see example
```lua
button:forcePropertyObserverUpdate()
```
:::

## fireEvent <C content="fireEvent"/>

Fires an event associated with the element

### Parameters

1. `string` The name of the event to fire.

### Returns

1. `self` The element itself.

::: details Click to see example
```lua
button:fireEvent("mouse_click")
```
:::

## isType <C content="isType"/>

Checks if the element belongs to a specified type.

### Parameters

1. `string` The type to check against.

### Returns

1. `boolean` true if the element belongs to the specified type, false otherwise.

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local frame = main:addFrame()

basalt.debug(frame:isType("Container")) -- Output: true
```
:::

## updateEvents <C content="updateEvents"/>

This will register all events to the parent. Mainly used internal. For example this is beeing called when we switch the parent frame.

### Returns

1. `self` The element itself.

::: details Click to see example
```lua
button:updateEvents()
```
:::
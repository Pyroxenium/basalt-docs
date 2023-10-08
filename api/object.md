---
outline: deep
---

# Object

The Object class is the fundamental building block class in Basalt, from which all other objects and components are derived. You can think of it as the “origin” of all objects within the framework. The Object class provides essential functions that are common to all derived objects, such as adding and removing event listeners and managing inheritance and relationships between objects.

In simple terms, the Object class is like a common ancestor that passes down basic functions and properties to all subsequent objects. This makes it easier to keep the behavior of objects throughout the framework consistent and predictable.

## Properties

|Property|Type|Description|
|---|---|---|
|enabled|bool|Controls whether the event listeners are active. When set to true, event operations related to the object are processed.
|parent|object|References the parent object that this object is nested within, if any.
|events|table|A table storing event handlers associated with this object.
|propertyObservers|table|A table holding observer functions that get triggered when specific properties of the object change. Useful for reactivity and updating related UI elements.
|name|string|A unique identifier or label for the object, which can be useful for debugging or for referencing the object programmatically.
|type|string|Describes the kind or category of the object, such as "button", "input", "label", etc.
|Z|number|Represents the object's depth or layering order in the UI. Higher values will render the object on top of those with lower values, allowing for control over overlapping elements.

## getProperty

Retrieves the value of a specified property for a Basalt object.

### Parameters

1. `string` the name of the property

### Returns

1. `any` the value of the specified property. The type of the returned value depends on the nature of the property (e.g., it could be a string, number, table, etc.).

### Usage

```lua
local main = basalt.createFrame()
local button = main:addButton()

-- Retrieve and print the 'name' property of the button
local propertyName = button:getProperty("name")
basalt.debug(propertyName)
```

## setProperty

Sets the value of a specified property for a Basalt object.

### Parameters

1. `string` The name of the property you wish to set.
2. `any`The value you want to assign to the specified property. The type of this parameter should match the expected type for the property in question (e.g., string, number, table, etc.).

### Usage

```lua
local main = basalt.createFrame()
local button = main:addButton()

-- Set the 'name' property of the button to a new value
button:setProperty("name", "MyButton")

-- For demonstration, retrieve and print the updated 'name' property
local updatedPropertyName = button:getProperty("name")
basalt.debug(updatedPropertyName)
```

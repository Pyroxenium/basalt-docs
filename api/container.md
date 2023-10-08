---
outline: deep
---

# Container

Container is the base class for all frame types. It provides the basic structure and functionality for all frame objects. Container objects can contain other container objects, thus forming the foundation for the hierarchy of frame objects.

## Properties

|Property|Type|Description|
|---|---|---|
|Children|table|A list containing all child objects within the container.
|ChildrenByName|table|A mapping of child objects by their respective names.
|ChildrenEvents|table|A collection of events associated with child objects.
|cursorBlink|bool|Indicates if the cursor blinks when a container is focused.
|cursorColor|color|The color of the cursor within the container.
|cursorX|number|The X-coordinate of the cursor within the container.
|cursorY|number|The Y-coordinate of the cursor within the container.
|focusedChild|object|The currently focused child object within the container.
|ElementsSorted|bool|Indicates if the child elements in the container are sorted.
|XOffset|number|Horizontal offset for positioning child objects within the container.
|YOffset|number|Vertical offset for positioning child objects within the container.

## addChild

Adds a object to the container

### Parameters

1. `object` any object

## getChild

Retrieves an object from the container by its ID.

### Parameters

1. `string` id - The ID of the object you want to retrieve

### Returns

1. `object` The object with the specified ID, or nil if no object with that ID is found.

### Usage

```lua
local main = basalt.addFrame()
local button = main:addButton("myButton")
    :setPosition(2, 2)
    :setText("My Button")

-- Get the button object by its ID
local retrievedButton = main:getChild("myButton")
if retrievedButton then
    basalt.debug("Button found!")
end

basalt.autoUpdate()
```

## getDeepChild

Retrieves an object from the container or its descendants by its ID. This method searches recursively through all child containers to find the object.

### Parameters

1. `string` id - The ID of the object you want to retrieve

### Returns

1. `object` The object with the specified ID, or nil if no object with that ID is found.

### Usage

```lua
local main = basalt.addFrame()
local container = main:addFrame("container")
local button = container:addButton("myButton")
    :setPosition(2, 2)
    :setText("My Button")
-- Get the button object by its ID, searching through all containers
local retrievedButton = main:getDeepChild("myButton")
if retrievedButton then
    basalt.debug("Button found!")
end

basalt.autoUpdate()

```

## removeChild

Removes an object from the container by its ID. If the object is not a direct child of the container, this method will not remove it.

### Parameters

1. `string` id - The ID of the object you want to remove

### Returns

1. `boolean` true if the object was removed

### Usage

```lua
local main = basalt.addFrame()
local container = main:addFrame("container")
local button = container:addButton("removableButton")
    :setPosition(2, 2)
    :setText("Remove me")

main:addButton()
    :setPosition(2, 4)
    :setText("Remove the button above")
    :onClick(function()
        local removed = container:removeChild("removableButton")
        if removed then
            basalt.debug("Button removed!")
        else
            basalt.debug("Button not found!")
        end
    end)

basalt.autoUpdate()
```

## removeChildren

The `removeChildren` method allows you to remove all child objects from a parent container. This is helpful when you want to clear all elements within a container object, such as a frame, and start with a clean slate.

### Returns

1. `object` The object in use

### Usage

```lua
local mainFrame = basalt.addFrame()

-- Add some child objects to the frame
mainFrame:addLabel("label1", "Hello", 5, 5)
mainFrame:addButton("button1", "Click Me", 5, 10)

-- Remove all child objects from the frame
mainFrame:removeChildren()
```

## updateChildZIndex

Updates the z-index of a specified object within the container. This is useful when you need to change the z-index of an object after it has been added to the container.

### Parameters

1. `object` The object whose z-index you want to update.
2. `number` The new z-index value for the object.

### Returns

1. `object` The object in use

### Usage

```lua
local frame = basalt.addFrame()
local button1 = frame:addButton():setZIndex(1)
local button2 = frame:addButton():setZIndex(2)

-- Update button1's z-index to be above button2
frame:updateChildZIndex(button1, 3)
```

## prioritizeElement

Sets the specified object as “important” within the container. This means the object will be reordered on the same z-index level, making it more important than other objects on the same level. This can be useful when you want to prioritize event handling or drawing order for specific objects.

### Parameters

1. `object` The object to set as important.

### Returns

1. `object` The object in use


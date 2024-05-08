# Scrollbars

The Scrollbars extension enhances the functionality of Container, TextField, and List elements by adding the ability to include scrollbars.

## Methods

|Method|Returns|Description|
|---|---|---|
|enableScrollbar|self|Enables the scrollbar for the element, allowing users to scroll through its content via a bar.
|disableScrollbar|self|Disables the scrollbar for the element.

## Usage

To use the Scrollbars extension in Basalt, simply call the provided methods on the supported elements. For example:

```lua
local main = basalt.getMainFrame()

local frame = main:addFrame()
local list = main:addList()
local textfield = main:addTextfield()

-- Enable scrollbar for a frame element
frame:enableScrollbar()

-- Enable scrollbar for a list element
list:enableScrollbar()

-- Enable scrollbar for a textfield element
textfield:enableScrollbar()
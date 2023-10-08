---
outline: deep
---

# Label

A Label object is used to display simple text on the interface.

## Properties

|Property|Type|Description|
|---|---|---|
|autoSize|bool|Determines if the label adjusts its size based on the text content
|text|string|The actual text content displayed by the label

## Example

In the provided example, a new frame is created, and a label is added to it. The label's text is then set to display "Hello, World!", showcasing the ease with which you can introduce text elements to your interface using Basalt.

```lua
local main = basalt.addFrame()
local aLabel = main:addLabel()
aLabel:setText("Hello, World!")
```

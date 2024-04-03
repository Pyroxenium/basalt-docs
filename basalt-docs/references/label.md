# Label

Labels are non-interactive elements in Basalt used for displaying text. They are commonly used to provide descriptions, headings, or instructions within user interfaces. By default a label uses the parent background and foreground color.

Label inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|autoSize|bool|Indicates whether the label automatically adjusts its size based on the text content.
|text|string|The text displayed by the label.
|wrap|boolean|Indicates whether the label text wraps to fit within its size constraints. If true, the label automatically adjusts its height to accommodate wrapped text. If false, the label adjusts its width to fit the text content without wrapping.
|wrapUpdate|boolean|If true the label will recalculate the wrapping-phase of the text

## Example

```lua
local main = basalt.addFrame()
local label1 = main:addLabel({x=2, y=2})
local label2 = main:addLabel({x=2, y=4, width=12, wrap=true})
label1:setText("Hello World!")
label2:setText("Hello World!\nThis is a test of the wrapping feature.")
```


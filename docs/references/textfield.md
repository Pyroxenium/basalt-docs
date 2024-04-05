# Textfield

Textfields are objects that allow users to write text in multiple lines, similar to the default edit script.

Textfield inherit from [VisualElement](visualelement) and [Element](element)

## Properties

|Property|Type|Description|
|---|---|---|
|lines|table|A collection of strings, where each string represents a separate line in the Textfield.
|lineIndex|number|The current line number where the cursor is positioned.
|scrollIndexX|number|The horizontal scroll position, determining which part of the text is visible when the text width exceeds the Textfield width.
|scrollIndexY|number|The vertical scroll position, deciding which part of the text is visible when the number of lines exceeds the Textfield's height.
|cursorIndex|number|The current position of the cursor within the line determined by lineIndex.

## Example

Here’s a simple example showcasing how to instantiate a Textfield object within the Basalt framework:

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local textfield = main:addTextfield()

main:addButton({x=20, y=2, text="Confirm"}):onClick(function()
    local text = textfield:getLines()
    for _,line in ipairs(text)do
        basalt.debug(line)
    end
end)
```
:::

---
outline: deep
---

# Textfield

Textfields are objects that allow users to write text in multiple lines, similar to the default edit script.

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

```lua
local main = basalt.createFrame()
local aTextfield = main:addTextfield()

-- User writes text into the Textfield
-- ...

-- Retrieve the text from the Textfield
local allText = table.concat(aTextfield.lines, "\n")
basalt.debug(allText)
```

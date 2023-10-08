---
outline: deep
---

# Checkbox

The Checkbox object is derived from the VisualObject class and allows users to set a boolean value to true or false by clicking on it. Checkboxes are commonly used in forms and settings to enable or disable specific options.

## Properties

|Property|Type|Description|
|---|---|---|
|checked|bool|Indicates whether the checkbox is currently selected or not.
|checkedSymbol|char|The symbol used to represent the checked state.
|checkedColor|color|The color of the symbol when the checkbox is checked.
|checkedBgColor|color|The color of the symbol when the checkbox is checked.

## Example

```lua
local main = basalt.addFrame()
local aCheckbox = main:addCheckbox()

aCheckbox:onClick(function(self,event,button,x,y)
  if (event == "mouse_click") and (button == 1) then
    if self.checked then
      basalt.debug("Checkbox is checked!")
    else
      basalt.debug("Checkbox is unchecked!")
    end
  end
end)
```

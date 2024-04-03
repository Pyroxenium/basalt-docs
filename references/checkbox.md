# Checkbox

Checkboxes are interactive elements in Basalt that allow users to select or deselect options. They are commonly used in forms and settings menus to indicate whether a particular option is enabled or disabled.

Checkbox inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|checked|bool|Indicates whether the checkbox is currently selected or not.
|checkedSymbol|char|The symbol used to represent the checked state.
|checkedColor|color|The color of the symbol when the checkbox is checked.
|checkedBgColor|color|The background color of the symbol when the checkbox is checked.

## Example

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local aCheckbox = main:addCheckbox()

aCheckbox:onClick(function(self,event,button,x,y)
  if event == "mouse_click" and button == 1 then
    if self.checked then
      basalt.debug("Checkbox is checked!")
    else
      basalt.debug("Checkbox is unchecked!")
    end
  end
end)
```
:::
# Button

Buttons are interactive elements in Basalt that users can click on to trigger actions or events. They are commonly used to initiate commands, submit forms, or navigate through interfaces.

Button inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|text|string|The text displayed on the button.

## Example

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local aButton = main:addButton():setText("Click")

aButton:onClick(function(self, event, button, x, y)
  if event == "mouse_click" and button == 1 then
    basalt.debug("Left mousebutton got clicked!")
  end
end)
```
:::
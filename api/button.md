---
outline: deep
---

# Button

The Button object is derived from the VisualObject class and is used for creating interactive buttons in the Basalt framework. When a button is clicked, it can execute a predefined function, such as navigating to another screen or performing a specific action.

## Properties

|Property|Type|Description|
|---|---|---|
|text|string|Text displayed on the surface of the button.

## Example

```lua
local main = basalt.addFrame()
local aButton = main:addButton():setText("Click")

aButton:onClick(function(self,event,button,x,y)
  if(event=="mouse_click")and(button==1)then
    basalt.debug("Left mousebutton got clicked!")
  end
end)
```

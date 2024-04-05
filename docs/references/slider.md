# Slider

Sliders are interactive elements that allow users to select a value within a specified range by dragging a knob along a track.

Slider inherit from [VisualElement](visualelement) and [Element](element)

## Properties

|Property|Type|Description|
|---|---|---|
|knobSymbol|string|The character used to represent the knob on the slider.
|knobBackground|color|Background color of the knob.
|knobForeground|color|Foreground color of the knob.
|bgSymbol|string|The character used to represent the slider's background track.
|value|number|The current value the slider is set to.
|minValue|number|The minimum value the slider can be set to.
|maxValue|number|The maximum value the slider can be set to.
|step|number|The incremental value by which the slider adjusts its value. For instance, a step of 10 on a 0-100 scale would allow values of 0, 10, 20, ... and so on.

## Example

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local aSlider = main:addSlider()

-- Set properties for the slider
aSlider:setMinValue(0)
aSlider:setMaxValue(100)
aSlider:setStep(5) -- Increments of 5

-- Add an event listener to the slider to fetch the value when changed
aSlider:onChange(function()
    local selectedValue = aSlider:getValue()
    basalt.debug("The current value of the slider is: " .. selectedValue)
end)
```
:::

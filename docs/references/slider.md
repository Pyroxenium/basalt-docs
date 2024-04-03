---
outline: deep
---

# Slider

Sliders are objects that allow users to scroll vertically or horizontally, which in turn changes a value that you can access using the :getValue() method.

## Properties

|Property|Type|Description|
|---|---|---|
|knobSymbol|char|The character used to represent the knob on the slider.
|knobBackground|color|Background color of the knob.
|knobForeground|color|Foreground color of the knob.
|bgSymbol|color|The character used to represent the slider's background track.
|value|number|The current value the slider is set to.
|minValue|number|The minimum value the slider can be set to.
|maxValue|number|The maximum value the slider can be set to.
|step|number|The incremental value by which the slider adjusts its value. For instance, a step of 10 on a 0-100 scale would allow values of 0, 10, 20, ... and so on.

## Example

Here's a demonstration of how to create and utilize a Slider object within the Basalt framework:

```lua
local main = basalt.createFrame()
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

n this example, when a user moves the slider, its value changes in increments of 5, and the selected value is printed out.

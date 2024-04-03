# Progressbar

Progress bars are visual elements used to indicate the progress of a task or operation. They provide visual feedback to users about the completion status of a process.

Progressbar inherit from [VisualElement](visualelement) and [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|progress|number|Current progress displayed by the progress bar, typically between 0 and 100.
|progressBackground|color|Color of the background which is not filled by the progress.
|minValue|number|The starting value of the progress, default 0.
|maxValue|number|The ending value representing completion, which corresponds to 100% on the progress bar, default 100.

## Example

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local progressbar = main:addProgressbar()

-- Set the initial properties
progressbar:setMinValue(0)
progressbar:setMaxValue(1000) -- Assuming our task's total workload is 1000 units

-- As your task progresses, update the progress displayed
local currentTaskValue = 500 -- This represents the task's current state

-- Convert the currentTaskValue to a percentage and set it as the progress
local percentageProgress = (currentTaskValue / progressbar:getMaxValue()) * 100
progressbar:setProgress(currentTaskValue)
```
:::
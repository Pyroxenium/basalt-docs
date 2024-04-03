---
outline: deep
---

# Progressbar

Progressbars are objects that visually display the current state of your progress. They always represent progress as a percentage (0 to 100%), regardless of their size. To represent progress in other units, you need to perform a simple conversion: currentValue / maxValue * 100.

## Properties

|Property|Type|Description|
|---|---|---|
|progress|number|Current progress displayed by the progress bar, typically between 0 and 100.
|progressBackground|color|Color of the background which is not filled by the progress.
|minValue|number|The starting value of the progress, typically 0.
|maxValue|number|The ending value representing completion, which corresponds to 100% on the progress bar.

## Example

Here’s how to implement and use the Progressbar object within the Basalt framework:

```lua
local main = basalt.createFrame()
local aProgressbar = main:addProgressbar()

-- Set the initial properties
aProgressbar:setMinValue(0)
aProgressbar:setMaxValue(1000) -- Assuming our task's total workload is 1000 units

-- As your task progresses, update the progress displayed
local currentTaskValue = 500 -- This represents the task's current state

-- Convert the currentTaskValue to a percentage and set it as the progress
local percentageProgress = (currentTaskValue / aProgressbar:getMaxValue()) * 100
aProgressbar:setProgress(currentTaskValue)
```

this example, the task has a total workload of 1000 units. When half of it, or 500 units, is complete, the progress bar reflects this by filling up to 50%.

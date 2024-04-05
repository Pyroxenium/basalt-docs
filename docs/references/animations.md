# Animations

Animations play a crucial role in enhancing the user experience by adding dynamic movement and visual effects to user interfaces. They bring elements to life, making interactions more engaging and intuitive.

## Creating Custom Animations

To create custom animations in Basalt, you can utilize the `newAnimation()`. This method returns an Animation object that you can customize according to your requirements. Here's a brief overview of the Animation object's methods:

- `setEase(string)`: Sets the easing function for the animation, defining how the animation progresses over time.
- `setIncrement(integer)`: Sets the default time increment for the animation. (default 0.05)
- `on(decimal)`: Sets the animation timeline to a specific time.
- `run(callback)`: Calls a function, which will be called on a specific time (defined by on or wait)
- `wait(decimal)`: Waits for a specific time.
- `play()`: Plays the animation.
- `stop()`: Stops the animation.
- `onDone(callback)`: Specifies a callback function to execute when the animation completes.

Here's a example:

```lua
local basalt = require("basalt")
local main = basalt.getMainFrame()

-- Create a new animation for a button
local animation = main:addButton():newAnimation()

animation:run(function(self)
    self:setPosition(3, 4)
end):wait(1):run(function(self)
    self:setPosition(4, 4)
end):wait(1):run(function(self)
    self:setPosition(5, 4)
end):onDone(function()
    basalt.debug("Animation done!")
end):play()
```

## Pre-defined Animations

In addition to creating custom animations, the Animation extension in Basalt provides several pre-defined animations.

- `animatePosition(x, y, duration, offset?, ease?)`: Animates the position of an element to the specified coordinates over a specified duration.
- `animateSize(width, height, duration, offset?, ease?)`: Animates the size of an element to the specified dimensions over a specified duration.
- `animateOffset(x, y, duration, offset?, ease?)`: Animates the offset of an element by the specified amount relative to its current position over a specified duration.

These pre-defined animations simplify the process of adding common motion effects to UI elements, allowing you to create dynamic and visually appealing interfaces with ease.

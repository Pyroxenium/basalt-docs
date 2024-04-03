# VisualElement

The VisualElement class is derived from the Element class and serves as the foundation for all visual components in Basalt. VisualElements include elements like frames, buttons, label's or input fields. The VisualElement class provides methods for managing the appearance, position, size, and other general visual properties of these elements.

VisualElement inherit from [BasicElement](element)

## Properties

|Property|Type|Description|
|---|---|---|
|background|color|Background color of the element.
|foreground|color|Foreground color or text color.
|x|number|Horizontal position of the element.
|y|number|Vertical position of the element.
|width|number|Width of the element.
|height|number|Height of the element.
|visible|bool|Whether the element is visible or hidden.
|transparent|bool|Whether the element's background is transparent.
|ignoreOffset|bool|Ignores parent's offset when positioning.
|focused|bool|Whether the element currently has focus.
|preRenderData|table|A table with custom pre-render information.
|postRenderData|table|A table with custom post-render information.

## Events

Events are actions or occurrences that happen during the execution of your program. In Basalt, elements can respond to various events, such as user interactions or incoming redstone/rednet events.

|Name|Description|
|---|---|
|[onClick](#onclick)|Fires when the element is clicked.
|[onClickUp](#onclickup)|Fires when the mouse button is released on the element.
|[onRelease](#onrelease)|Fires when the mouse button is released.
|[onScroll](#onscroll)|Fires when scrolling with the mouse wheel.
|[onDrag](#ondrag)|Fires when the element is being dragged.
|[onHover](#onhover)|CraftOS-PC - fires when the mouse hovers over an element.
|[onLeave](#onleave)|CraftOS-PC - fires when the mouse leaves an element.
|[onKey](#onkey)|Fires when the element is focused and a keyboard key is pressed.
|[onKeyUp](#onkeyup)|Fires when the element is focused and a keyboard key is released.
|[onChar](#onchar)|Fires when the element is focused and a character key is pressed.
|[onGetFocus](#ongetfocus)|Fires when the element gains focus.
|[onLoseFocus](#onlosefocus)|Fires when the element loses focus.
|[onEvent](#onevent)|Fires on any other (uncategorized) event.
|[onResize](#onresize)|Fires when the size of the element is changed.
|[onReposition](#onreposition)|Fires when the position of the element is changed (moved to a new location).

## Methods

|Methods|Returns|Description|
|---|---|---|
|[preRender](#prerender)|self|This method is beeing called before the actual element render happens.
|[render](#render)|self|This will render the element.
|[postRender](#postrender)|self|This method is beeing called after the actual element render happens.
|[preText](#pre-posttext)|self|This method allows the user to draw custom text for the element before rendering.
|[preBg](#pre-postbg)|self|This method allows the user to draw a custom background for the element before rendering.
|[preFg](#pre-postfg)|self|This method allows the user to draw a custom foreground (e.g., text color) for the element before rendering.
|[preBlit](#pre-postblit)|self|This method allows the user to draw text, bg and fg onto the element before rendering.
|[preTextBox](#pre-posttextbox)|self|This method allows the user to draw a custom text box within the element before rendering.
|[preBackgroundBox](#pre-postbackgroundbox)|self|This method allows the user to draw a custom background box before rendering.
|[preForegroundBox](#pre-postforegroundbox)|self|This method allows the user to draw a custom foreground box before rendering.
|[postText](#pre-posttext)|self|This method allows the user to draw custom text for the element after rendering.
|[postBg](#pre-postbg)|self|This method allows the user to draw a custom background for the element after rendering.
|[postFg](#pre-postfg)|self|This method allows the user to draw a custom foreground (e.g., text color) for the element after rendering.
|[postBlit](#pre-postblit)|self|This method allows the user to draw text, bg and fg onto the element after rendering.
|[postTextBox](#pre-posttextbox)|self|This method allows the user to draw a custom text box within the element after rendering.
|[postBackgroundBox](#pre-postbackgroundbox)|self|This method allows the user to draw a custom background box after rendering.
|[postForegroundBox](#ppre-ostforegroundbox)|self|This method allows the user to draw a custom foreground box after rendering.
|[clearPreRender](#clearprerender)|self|Clears any custom pre-render data that has been set for the element.
|[clearPostRender](#clearpostrender)|self|Clears any custom post-render data that has been set for the element.
|[getRelativePosition](#getrelativeposition)|number|Returns the relative position of the element within its parent container.
|[getAbsolutePosition](#getabsoluteposition)|number|Returns the absolute position of the element relative to the screen or window.
|[isInside](#isinside)|boolean|Checks whether a given point (coordinates) is inside the boundaries of the element. Returns a boolean value indicating whether the point is inside the element or not.

## onClick <C content="onClick"/>

Registers a new event listener for `mouse_click` events.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

local function mouseClick(self, button, x, y)
    basalt.debug("Button got clicked!")
end

button:onClick(mouseClick)
```
:::

## onClickUp <C content="onClickUp"/>

Registers a new event listener for `mouse_up` events.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

local function mouseRelease(self, button, x, y)
    basalt.debug("Mouse button released!")
end

button:onClickUp(mouseRelease)
```
:::

## onRelease <C content="onRelease"/>

Registers a new event listener for `mouse_up` events, even when it doesn't happen inside the element.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

local function releaseHandler(self)
    basalt.debug("Mouse button released!")
end

button:onRelease(releaseHandler)
```
:::

## onScroll <C content="onScroll"/>

Registers a new event listener for `mouse_scroll` events

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local list = main:addList()

local function scrollHandler(self, direction, x, y)
    basalt.debug("Mouse scrolled: " .. direction)
end

list:onScroll(scrollHandler)
```
:::

## onDrag <C content="onDrag"/>

Registers a new event listener for `mouse_drag` events

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local movableFrame = main:addMovableFrame()

local function dragHandler(self, button, x, y)
    basalt.debug("Element dragged!")
end

movableFrame:onDrag(dragHandler)
```
:::

## onHover <C content="onHover"/>

Registers a new event listener for `mouse_move` events.

::: warning
This is only available for [CraftOS-PC](https://www.craftos-pc.cc/). CC:Tweaked has no mouse_move events implemented.
:::

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

local function hoverHandler(self, x, y)
    basalt.debug("Mouse hovered over the button!")
end

button:onHover(hoverHandler)
```
:::

## onLeave <C content="onLeave"/>

Registers a new event listener for `mouse_move` events.

::: warning
This is only available for [CraftOS-PC](https://www.craftos-pc.cc/). CC:Tweaked has no mouse_move events implemented.
:::

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local button = main:addButton()

local function leaveHandler(self)
    basalt.debug("Mouse left the button!")
end

button:onLeave(leaveHandler)
```
:::

## onKey <C content="onKey"/>

Registers a new event listener for `key` events.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local input = main:addInput()

local function keyPressHandler(self, key)
    basalt.debug("Key pressed: " .. keys[key])
end

input:onKey(keyPressHandler)
```
:::

## onKeyUp <C content="onKeyUp"/>

Registers a new event listener for `key_up` events.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local input = main:addInput()

local function keyReleaseHandler(self, key)
    basalt.debug("Key released: " .. keys[key])
end

input:onKeyUp(keyReleaseHandler)
```
:::

## onChar <C content="onChar"/>

Registers a new event listener `char` events.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local input = main:addInput()

local function charPressHandler(self, char)
    basalt.debug("Character pressed: " .. char)
end

input:onChar(charPressHandler)
```
:::

## onGetFocus <C content="onGetFocus"/>

Registers a new custom event listener for when the element gains focus.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local textfield = main:addTextfield()

local function focusHandler(self)
    basalt.debug("Element gained focus!")
end

textfield:onGetFocus(focusHandler)
```
:::

## onLoseFocus <C content="onLoseFocus"/>

Registers a new custom event listener for when the element loses focus.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local textfield = main:addTextfield()

local function blurHandler(self)
    basalt.debug("Element lost focus!")
end

textfield:onLoseFocus(blurHandler)
```
:::

## onEvent <C content="onEvent"/>

Registers a new event listener for any other (uncategorized) event that may occur.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
local textfield = main:addTextfield()

local function pasteHandler(self, event, text)
    if event == "paste" then
        basalt.debug("Text got pasted: "..text)
    end
end

textfield:onLoseFocus(pasteHandler)
```
:::

## onResize <C content="onResize"/>

Registers a new custom event listener for when the size of the element is changed.

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()

local function resizeHandler(self, width, height)
    basalt.debug("Element resized to " .. width .. "x" .. height)
end

main:onResize(resizeHandler)
```
:::

## onReposition <C content="onReposition"/>

Registers a new event listener for when the position of the element is changed (moved to a new location).

### Parameters

1. `function` The function to call when the event triggers

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()

local function repositionHandler(self, x, y)
    basalt.debug("Element repositioned to (" .. x .. ", " .. y .. ")")
end

main:onReposition(repositionHandler)
```
:::

## preRender <C content="preRender"/>

This method is called before the actual element rendering happens. It can be overridden to perform specific preprocessing before the element is rendered.

::: warning
This method is not supposed to be called outside of basalt's render system!
:::

::: details Click to see example
```lua
-- No example avaialble yet
```
:::

## render <C content="render"/>

This method renders the element. It can be overridden to customize the default rendering behavior of the element and modify it significantly.
In case render gets overridden, the default visuals for the elements won't appear anymore.

::: warning
This method is not supposed to be called outside of basalt's render system!
:::

::: details Click to see example
```lua
-- No example avaialble yet
```
:::

## postRender <C content="postRender"/>

This method is called after the actual element rendering happens. It can be overridden to perform additional processing after the element has been rendered.

::: warning
This method is not supposed to be called outside of basalt's render system!
:::

::: details Click to see example
```lua
-- No example avaialble yet
```
:::

## pre-<C content="preText"/>/postText <C content="postText"/>

This method allows the user to draw custom text for the element before or after rendering.

### Parameters

1. `number` x - The x-coordinate.
2. `number` y - The y-coordinate.
3. `string` The text content to be drawn

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postText(3, 3, "Hello World!")
```
:::

## pre-<C content="preBg"/>/postBg <C content="postBg"/>

These methods allow the user to draw a custom background for the element before or after rendering.

### Parameters

1. `number` x - The x-coordinate.
2. `number` y - The y-coordinate.
3. `string` The background color to be drawn e.g. "ffffff"

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postBg(3, 3, "5555555")
```
:::

## pre-<C content="preFg"/>/postFg <C content="postFg"/>

These methods allow the user to draw a custom foreground for the element before or after rendering.

### Parameters

1. `number` x - The x-coordinate.
2. `number` y - The y-coordinate.
3. `string` The foreground color to be drawn e.g. "ffffff"

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postFg(3, 2, "22222222")
```
:::

## pre-<C content="preBlit"/>/postBlit <C content="postBlit"/>

These methods allow the user to draw text, background, and foreground elements onto the element before or after rendering.

::: tip
Note that text, fg, and bg must be the same string size!
:::

### Parameters

1. `number` x - The x-coordinate.
2. `number` y - The y-coordinate.
3. `string` The text content to be drawn
4. `string` The foreground color to be drawn
5. `string` The background color to be drawn

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postBlit(2, 2, "Hello World!", "111111111111", "dddddddddddd")
```
:::

## pre-<C content="preTextBox"/>/postTextBox <C content="postTextBox"/>

These methods allow the user to draw a custom text box with a single char before or after rendering.

### Parameters

1. `number` x - The x-coordinate.
2. `number` y - The y-coordinate.
3. `number` width - The width of the box.
4. `number` height - The height of the box.
5. `string` the symbol you want to be drawn

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postTextBox(2, 2, 10, 10, "\2\4")
```
:::

## pre-<C content="preBackgroundBox"/>/postBackgroundBox <C content="postBackgroundBox"/>

These methods allow the user to draw a custom background box for the element before or after rendering.

### Parameters

1. `number` x - The x-coordinate.
2. `number` y - The y-coordinate.
3. `number` width - The width of the box.
4. `number` height - The height of the box.
5. `string|color` The background color as string or a color

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postBackgroundBox(2, 2, 10, 10, "241d") -- or colors.red e.g
```
:::

## pre-<C content="preForegroundBox"/>/postForegroundBox <C content="postForegroundBox"/>

These methods allow the user to draw a custom foreground box for the element before or after rendering.

### Parameters

1. `number` x - The x-coordinate.
2. `number` y - The y-coordinate.
3. `number` width - The width of the box.
4. `number` height - The height of the box.
5. `string|color` The foreground color as string or a color

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postForegroundBox(2, 2, 10, 10, "1213") -- or colors.blue e.g
main:postTextBox(2, 2, 10, 10, "Hello")
```
:::


## clearPreRender <C content="clearPreRender"/> / clearPostRender <C content="clearPostRender"/>

These methods clear any custom pre-render or post-render data that has been set for the element, respectively.

### Returns

1. `self`

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:postForegroundBox(2, 2, 10, 10, "1213")
main:postTextBox(2, 2, 10, 10, "Hello")
main:addButton():setPosition(15, 2):onClick(function()
    main:clearPostRender()
end)
```
:::

## getRelativePosition <C content="getRelativePosition"/>

This method returns the relative position of the element within its parent container.

### Parameters

1. `number?` The X-Coordinate
2. `number?` The Y-Coordinate

### Returns

1. `number` X-Cooridnate
2. `number` y-Cooridnate

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:addButton():setPosition(2, 2):onClick(function(self)
    basalt.debug(self:getRelativePosition())
end)
```
:::

## getAbsolutePosition <C content="getAbsolutePosition"/>

This method returns the absolute position of the element relative to the screen or window.

### Parameters

1. `number?` The X-Coordinate
2. `number?` The Y-Coordinate

### Returns

1. `number` X-Cooridnate
2. `number` y-Cooridnate

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:addButton():setPosition(2, 2):onClick(function(self)
    basalt.debug(self:getAbsolutePosition())
end)
```
:::

## isInside <C content="isInside"/>

This method checks whether a given point (coordinates) is inside the boundaries of the element. It returns a boolean value indicating whether the point is inside the element or not.

### Parameters

1. `number?` The X-Coordinate
2. `number?` The Y-Coordinate

### Returns

1. `boolean` true if the given coordinate is inside the element, otherwise false

::: details Click to see example
```lua
local main = basalt.getMainFrame()
main:addButton():setPosition(2, 2):onClick(function(self)
    basalt.debug(self:isInside(5, 5)) -- checks if x5, y5 is inside the button
end)
```
:::


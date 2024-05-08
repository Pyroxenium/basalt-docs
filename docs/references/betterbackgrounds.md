# Better Backgrounds

The Better Backgrounds extension allows the use of characters or strings as backgrounds. 

## Properties

|Property|Type|Description|
|---|---|---|
|backgroundSymbol|string|Specifies the symbol or string to use as the background of the element. It will be repeated to fill the entire background.
|backgroundSymbolColor|color|Specifies the color of the background symbol. Default: red

## Usage

To use the Better Backgrounds extension in Basalt, simply apply the desired background properties to your elements. For example:

```lua
local main = basalt.getMainFrame()
local frame = main:addFrame():setPosition(2, 2)

frame:setBackgroundSymbol("#"):setBackgroundSymbolColor(colors.blue)
```
---
outline: deep
---

# Image

The Image object is designed for adding more advanced backgrounds to your interface. It supports the loading of .nfp and .bimg images, allowing for greater customization of your interface’s appearance.

## Properties

|Property|Type|Description|
|---|---|---|
|frame|number|Determines the current frame of the bimg image
|XOffset|number|Horizontal offset of the image from its starting position
|YOffset|number|Vertical offset of the image from its starting position

## set

This method sets the image to be displayed in the Image object.

### Parameters

1. `string` The path to the image file you wish to use.
2. `string` (optional) - The format of the image: `nfp` or `bimg`.

### Returns

1. `object` The object in use

### Usage

```lua
local main = basalt.createFrame()
local image = main:addImage()
image:set("dog.nfp")
```

## play

Plays a animated bimg image

### Parameters

1. `boolean` optional - infinite loop.

### Returns

1. `object` The object in use

### Usage

```lua
local main = basalt.createFrame()
local image = main:addImage()
image:set("dog.bimg"):play()
```

# Templates 

The Template extension allows users to define and manage templates for styling the user interface elements. Templates provide a convenient way to set default values for various properties of UI elements.

## Usage

### Setting a Template

To define a new template, you can use the `basalt.setTemplate()` function. This function allows you to specify default values for properties for different UI elements.

```lua
basalt.setTemplate({
    default = {
        background = "gray",
        foreground = "black"
    },
    Button = {
        background = "{self.clicked ? black : gray}",
        foreground = "{self.clicked ? lightGray : black}"
    },
    Label = {
        background = nil
    }
})
```

### Adding to Existing Template

You can also add or update properties in an existing template using the `basalt.addTemplate()` function.

```lua
basalt.addTemplate({
    Button = {
        foreground = "white"
    }
})
```

### Loading from JSON

Templates can be loaded from JSON-formatted files using the `basalt.loadTemplate()` function.

```lua
basalt.loadTemplate("myTemplate", "path/to/template.json")
```

### Customizing Colors

In addition to setting default property values for UI elements, templates in Basalt also allow you to define custom colors for use throughout your interface. The `colors` section in a template JSON or Lua table enables you to specify custom color values that can be referenced by name in the template.

```json
{
    "colors": {
        "pink": "#FF4081",
        "red": "#D32F2F",
        "white": "#E0E0E0",
        "black": "#202020",
        "gray": "#404040",
        "lightGray": "#808080"
    },
    ...
}
```

The `basalt.setColors()` function also allows you to define custom colors. This function replaces the default 16 colors with your custom color palette.

```lua
basalt.setColors({
    "pink" = 0xFF4081,
    "red" = 0xD32F2F
})
```

### Example Template (classic)

Here's an example of a template:

```json
{
    "default": {
        "background": "gray",
        "foreground": "black"
    },
    "BaseFrame": {
        "background": "lightGray",
        "foreground": "black",
        "Button": {
            "background": "{self.clicked ? black : gray}",
            "foreground": "{self.clicked ? lightGray : black}"
        },
        "Container": {
            "background": "gray",
            "foreground": "black",
            "Button": {
                "background": "{self.clicked ? lightGray : black}",
                "foreground": "{self.clicked ? black : lightGray}"
            }
        },
        "Checkbox": {
            "background": "black",
            "foreground": "lightGray"
        },
        "Input": {
            "background": "{self.focused ? gray : black}",
            "foreground": "{self.focused ? black : gray}",
            "placeholderBackground": "{self.focused ? gray : black}",
            "placeholderColor": "{self.focused ? gray : gray}",
            "placeholderText": "{self.focused ? '' : 'Type..'}",
            "width": 14
        },
        "Slider": {
            "background": null,
            "knobBackground": "{self.focused ? cyan : black}"
        },
        "Label": {
            "background": null
        }
    }
}
```
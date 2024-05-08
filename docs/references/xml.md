# XML 

Basalt provides a convenient way to create and load user interface (UI) elements using XML (eXtensible Markup Language). XML allows you to define the structure and properties of UI elements in a human-readable format, making it easier to manage complex UI layouts.

## Creating UI Elements in XML

In XML, each UI element is represented by a tag, and its properties are specified as attributes within the tag. Here's a basic example of how to create a button element in XML:

```xml
<button x="10" y="10" width="100" height="30" text="Click Me" />
```

You can add additional attributes to customize the appearance and behavior of UI elements further. Refer to the Basalt documentation for a list of supported attributes for each UI element.

## Creating Events for UI Elements in XML

In XML, you can also define event handlers for UI elements to specify actions to be performed when certain events occur. For example, to add an onClick event to a button element, you can include the event handler within the button tag as follows:

```xml
<button x="10" y="10" width="100" height="30" text="Click Me">
    <onClick>
        basalt.debug("Button got clicked")
    </onClick>
</button>
```

## Loading XML Files in Basalt

Once you've created your UI elements in XML, you can load them into your Basalt application using the `element:loadXML()` method. This method parses the XML file and creates the corresponding UI element in your application.

```lua
local basalt = require("basalt")
local main = basalt.getMainFrame()

-- Load UI elements from XML file
main:loadXML("ui_layout.xml")

basalt.run()
```
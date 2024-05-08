# Debug

The Debug extension is designed to facilitate the development of programs by providing tools for debugging and logging information. This guide provides an overview of the methods available with the Debug extension and how to use them effectively.

## Methods

|Method|Returns|Description|
|---|---|---|
|basalt.openDebugPanel|-|Opens or closes the debug panel, which displays debug information.
|basalt.debug|-|Logs the specified text to the debug panel for debugging purposes.

## Usage

To use the Debug extension in Basalt, simply call the provided methods in your code as needed. For example:

```lua
-- Open the debug panel
basalt.openDebugPanel(true)

-- Log debug information
basalt.debug("Initializing application...")

-- More code...

-- Log additional information
basalt.debug("Application initialized successfully.")
```
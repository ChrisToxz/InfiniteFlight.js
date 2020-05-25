# InfiniteFlight.js
 An Extremely Simple JavaScript Module for V1 of the Infinite Flight Connect API

---

### Installation

```
npm install infiniteflightjs -g
```

## Using the Module

After requiring the module, call `InfiniteFlight.init(success, error)` to establish the connection to Infinite Flight. This will log the connection details upon success, and call your error function on failure. Neither the success or error functions accept arguments.

To listen for response messages from Infinite Flight, call `InfiniteFlight.onMessage(onMsg)`. The provided function will be executed each time a message is received from Infinite Flight and takes a single argument - the received message in plain text.

To send a command to Infinite Flight call `InfiniteFlight.sendCmd(command, params)`. Command should be a command found in the list of commands found in commands.txt and params should be an array container an object of any necessary parameters. For commands that do not require parameters, this must be set to a blank array - `[]`.

Please note the `onMessage` listener and `sendCmd` function will only work after `init` has finished.

### Example

A very simple example showing all features is available in the example folder.

### Requirements

- Node.js `dgram` module
- Node.js `net` module

## Contributing

I welcome any contributions to improve this service. Simply fork, change and open a PR. This code is licensed under the GNU GPLv3 License. Bug reports are welcome through the issues feature.

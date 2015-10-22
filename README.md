# Console Debug

Custom console which can be turned on or off

* Prevents errors on console methods when no console present
* Exposes a global log function that preserves line numbering and formatting

## Usage

Console.log:

```javascript
debug.log('log');
```

Console.error:

```javascript
debug.error('error');
```

Turn on the log:

```javascript
debugOn();
```

Turn off the log:

```javascript
debugOff();
```

## Example

Please check `example` folder.

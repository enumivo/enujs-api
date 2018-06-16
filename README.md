# Enu API

Application programming interface to Enumivo blockchain nodes.  This is for
read-only API calls.  If you need to sign transactions use
[enujs](https://github.com/enumivo/enujs) instead.

# Requirements

## EnuApi

Run [enunode](https://github.com/enumivo/enumivo)

## Usage

```javascript
EnuApi = require('enujs-api') // Or EnuApi = require('./src')

enu = EnuApi() // // 127.0.0.1:8888

// Any API call without a callback parameter will print documentation: description,
// parameters, return value, and possible errors.  All methods and documentation
// are created from JSON files in enujs/json/api/v1..
enu.getInfo()

// A Promise is returned if a callback is not provided.
enu.getInfo({}).then(result => console.log(result))
enu.getBlock(1).then(result => console.log(result))

// For callbacks instead of Promises provide a callback
callback = (err, res) => {err ? console.error(err) : console.log(res)}

// The server does not expect any parameters only the callback is needed
enu.getInfo(callback)

// Parameters are added before the callback
enu.getBlock(1, callback)

// Parameters can be an object
enu.getBlock({block_num_or_id: 1}, callback)
enu.getBlock({block_num_or_id: 1}).then(result => console.log(result))
```

## Configuration

```js
EnuApi = require('enujs-api') // Or EnuApi = require('./src')

// everything is optional
options = {
  httpEndpoint: 'http://127.0.0.1:8888', // default, null for cold-storage
  verbose: false, // API logging
  logger: { // Default logging functions
    log: config.verbose ? console.log : '',
    error: console.error
  },
  fetchConfiguration: {}
}

enu = EnuApi(options)
```
### options.logger example

During testing, an error may be expected and checked as follows:

```js
options.logger = {
  error: err => {
    assert.equal(err, 'expected error')
  }
}
```

### options.fetchConfiguration example

```js
options.fetchConfiguration = {
  credentials: 'same-origin'
}
```
Every enujs-api request will run [fetch](https://github.com/github/fetch#sending-cookies) with this configuration:
```js
fetch('https://example.com', {
  credentials: 'same-origin'
})
```

## API Documentation

API methods and documentation are generated from:
* [chain.json](https://github.com/enumivo/enujs-api/blob/master/src/api/v1/chain.json)
* [history.json](https://github.com/enumivo/enujs-api/blob/master/src/api/v1/history.json)

Helper functions:
* [./docs/index.md](./docs/index.md)

## Environment

Node and browser (es2015)

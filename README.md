[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/morphene/morphene-js/blob/master/LICENSE)

# Morphene.js
Morphene.js the JavaScript API for Morphene blockchain

# Documentation

- [Install](https://github.com/morphene/morphene-js/tree/master/doc#install)
- [Browser](https://github.com/morphene/morphene-js/tree/master/doc#browser)
- [Database API](https://github.com/morphene/morphene-js/tree/master/doc#api)
    - [Blocks and transactions](https://github.com/morphene/morphene-js/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/morphene/morphene-js/tree/master/doc#globals)
    - [Keys](https://github.com/morphene/morphene-js/tree/master/doc#keys)
    - [Accounts](https://github.com/morphene/morphene-js/tree/master/doc#accounts)
    - [Authority / validation](https://github.com/morphene/morphene-js/tree/master/doc#authority--validation)
    - [Witnesses](https://github.com/morphene/morphene-js/tree/master/doc#witnesses)
- [Login API](https://github.com/morphene/morphene-js/tree/master/doc#login)
- [Broadcast API](https://github.com/morphene/morphene-js/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/morphene/morphene-js/tree/master/doc#broadcast)
- [Auth](https://github.com/morphene/morphene-js/tree/master/doc#auth)


Here is full documentation:
https://github.com/morphene/morphene-js/tree/master/doc

## Browser
```html
<script src="./morphene-js.min.js"></script>
<script>
morpheneJS.api.getAccounts(['initwitness'], function(err, response){
    console.log(err, response);
});
</script>
```

## Server
## Install
```
$ npm install @boone-development/morphene-js --save
```

## RPC Servers
https://morphene.io/rpc By Default<br/>

## Examples

### Get Accounts
```js
morpheneJS.api.getAccounts(['initwitness'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
morpheneJS.api.getState('/', function(err, result) {
	console.log(err, result);
});
```

## Issues
When you find issues, please report them!

## License
MIT

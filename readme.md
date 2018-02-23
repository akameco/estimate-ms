# estimate-ms [![Build Status](https://travis-ci.org/akameco/estimate-ms.svg?branch=master)](https://travis-ci.org/akameco/estimate-ms)

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/estimate-ms.svg)](https://greenkeeper.io/)

> pretty output estimated time


## Install

```
$ npm install --save estimate-ms
```


## Usage

```js
const estimateMs = require('estimate-ms');

const len = 10;
const est = estimateMs(len);

for (let i = 0; i < len; ++i) {
	console.log(est(i));
}

// => 162ms
// => 189ms
// => 84ms
// => 49ms
// => 33ms
// => 22ms
// => 15ms
// => 10ms
// => 6ms
// => 0ms
```


## API

### estimateMs(len)

#### len

Type: `number`

array length.

#### est(index)

##### index

Type: `number`<br>

current index.

## License

MIT © [akameco](http://akameco.github.io)

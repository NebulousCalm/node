# Create your own module

## Method One

>filename: `module.js`
```javascript
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

module.exports = {add, subtract}
```

>filename `index.js`
```javascript
  const x = require('./module');
  console.log(x.add(1, 2));
```

## Method two

>filename: `module.js`
```javascript
exports.add = (x, y) => x + y;
exports.subtract = (x, y) => x - y;

module.exports = {add, subtract}
```

>filename `index.js`
```javascript
  const {add, subtract} = require('./module');
  console.log(add(1, 2));
```

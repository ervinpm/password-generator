# Password Generator

This is a simple password generator using javascript and npm. It takes 3 parameters:

1. Length of the password
2. Indicator if numbers are included
3. Indicator if symbols are included

## Installation

```bash
$ npm install passjs-gen
```

## Usage

```javascript
var passjs = require('passjs-gen');
console.log(passjs.generatePassword(10,true,false));
```
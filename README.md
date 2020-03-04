# jest-starter

- ### ignore node modules (Done here)
`echo "node_modules/" >> .gitignore`

- ### add babel/jest 
`yarn add --dev  jest babel-jest babel-core regenerator-runtime babel-preset-env @babel/preset-env`

- ### create a .babelrc file and add this  
```json
{
  "presets": ["@babel/preset-env"]
}
```

- ### add to 'test' script to  package.json
```json
"scripts": {
  "test": "jest"
  } 
```  

- ### create a __tests__ folder
>this is convention for jest, when you run `yarn run test` jest will automatically look for this folder and run any files ending with  .test.

- ### create a ####.test.js folder
>it name this file the same name of the file you are testing and place in the __tests_folder

### importing exporting oldWay

```javascript
// exporting
function add(num1,num2){
  return num1 + num2
}

function minus(num1,num2){
  return num1 - num2
}

module.exports.minus = minus
exports.add = add

// module.exports = {
//   add,
//   minus,
// }
```
```javascript

// ------------ IMPORTING--------
var myMethods = require('../oldWayExport')
var {minus, add} = require('../oldWayExport')

test('add module export', function(){
  expect(myMethods.add(1,1)).toEqual(2)
})

test('add module export', function(){
  expect(myMethods.minus(1,1)).toEqual(0)
})

test('destructure', function(){
  expect(minus(1,1)).toEqual(0)
})
test('destructure', function(){
  expect(add(1,1)).toEqual(2)
})
```

### importing exporting ES6
```javascript
// exporting (NOTE the default export)
export const add = (num1, num2) => {
  return num1 + num2
}

export function add1(num1, num2){
  return num1 + num2
}

const defaultExport = () => {
  return 'yo'
}

export default defaultExport
```
```javascript

// ------------ IMPORTING--------
import  defaultExport, { add, add1 } from '../example'

test('first test', function(){
  expect(add(1,1)).toEqual(2)
})
test('second test', function(){
  expect(add1(1,1)).toEqual(2)
})
test('second test', function(){
  expect(defaultExport(1,1)).toEqual('yo')
})

```
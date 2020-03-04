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
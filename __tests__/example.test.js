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
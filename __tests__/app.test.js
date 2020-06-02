import {
  // methods,
  // methods,
  evensOnlyArray,
  doubleArray,
  originalArray
} from '../app'
// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray', () => {
  test('it should double values in array', () => {
    expect(doubleArray([1,2,3])).toEqual([2,4,6])
  })
})

describe('evensOnlyArray', () => {
  test('it should print even values from the array', () => {
    expect(evensOnlyArray([1,2,3,4,6,7,8])).toEqual([2,4,6,8])
  })
})
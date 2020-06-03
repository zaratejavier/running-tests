import {
  findItem,
  evensOnlyAndDoubleArray,
  someNumbersAreOdd,
  arraySum,
  evensOnlyArray,
  doubleArray,
  originalArray,
  sortArray,
  moreThan100Likes,
  justArtistMoreThan100Likes
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

describe('arraySum', () => {
  test('It should add up the numbers in the array', () =>{
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
})

describe('someNumbersAreOdd', () => {
  test("it should return true if here are odd numbers", () => {
    expect(someNumbersAreOdd([2,4,6,8,10,11])).toEqual(true)
  })
})

describe('evensOnlyAndDoubleArray' , () => {
  test("it should print doubled and even numbers", () => {
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
})

describe('findItem', () => {
  test("Return not found if number doesnt exist", () => {
    expect(findItem([1,2,3,4],3)).toEqual(3)
  })
})

describe('sortArray', () => {
  test("Reverse the array", () => {
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })
})

describe('moreThan100Likes', () => {
  test("Artist with more than 100 likes", () => {
    expect(moreThan100Likes([
    {name: 'a', likes:100},
    {name: 'b', likes:99},
    {name: 'c', likes:101}, ])).toEqual([{name: 'c', likes:101}])
  })
})

describe('justArtistMoreThan100Likes', () => {
  test("Get the artist name with more than 100 likes", () => {
    expect(justArtistMoreThan100Likes([
      {name: 'a', likes:100},
      {name: 'b', likes:99},
      {name: 'c', likes:101}, ])).toEqual(['c'])
  })
})
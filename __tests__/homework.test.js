import { 
  numberArray as originalArray, // example of named import
  doubleArray,
  evensOnlyArray,
  evensOnlyAndDoubleArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd
} from '../homework'

test('original array', () => {
  expect(originalArray).toEqual([1,2,3,4]);
})

test('doubled array', () => {
  expect(doubleArray).toEqual([2,4,6,8]);
});


test('filters evens', () => {
  expect(evensOnlyArray).toEqual([2,4]);
});

test('filters even and doubles array', () => {
  expect(evensOnlyAndDoubleArray).toEqual([4,8]);
});

test('finds sum of array', () => {
  expect(arraySum).toEqual(10);
});

test('return true that all number greater than 0', () => {
  expect(allNumbersGreaterThanZero).toBe(true);
});

test('return true that some numbers are odd', () => {
  expect(someNumbersAreOdd).toBe(true);
});


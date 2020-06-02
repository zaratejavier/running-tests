export const originalArray = (arr) =>{
  return arr
};

// doubleArray(numberArray) // => [2,4,6,8];  hint use map √
export const doubleArray = (arr) => {
  let doubledArr = arr.map((number) => {
    return number * 2
  })
  return doubledArr
}

// // return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4];  hint use filter √
export const evensOnlyArray = (arr) => {

  let even = arr.filter(val => {
    return val % 2 === 0;
  });
  return even;
}


// // return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce √
export const arraySum = (arr) => {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer)
}

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some √
export const someNumbersAreOdd = (arr) => {
  const odd = (element) => element % 2 !== 0;

  return arr.some(odd);
}

// // return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter √
export const evensOnlyAndDoubleArray = (arr) => {
  let doubleEven = arr.filter(val => {
    return val % 2 === 0;
  }).map((number) => {
    return number * 2
  })
  return doubleEven;
}

// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1

export const findItem = (arr,num) =>{

  let item = arr.find(val => {
    return val == num
  })
  if (item ){
    return item
  }
  else {
    return "Not found"
  }
}



// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME

// ways to export

// export const methodName = (param) => {
// }

// ----or---------

// export methodName function(param){
// }


// ARRAY ITERATOR METHODS
// numberArray = [1,2,3,4]

// // return array with double values in array 
// doubleArray(numberArray) // => [2,4,6,8];  hint use map √


// // return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4];  hint use filter √

// // return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce

// // return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every √

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some √

// // return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter √

// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1

// // sort array desc order
// sortArray(numberArray) //=> [4,3,2,1] *desc*


// // -----BONUS------
// // ARRAY ITERATOR METHODS ON Objects with name age 

// artists = [
//   {name: 'a', likes:100},
//   {name: 'c', likes:99},
//   {name: 'c', likes:101}, 
// ]
// // doubles likes of artist
// doubleLikes(artists)
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'c', likes:198},
// //   {name: 'c', likes:202},  
// // ]; 
// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter

// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter

// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes

// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}

// // returns array of artist sorted by likes
// sortArtistByName(artists)
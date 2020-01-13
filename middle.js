const eqArrays = function(arrayOne, arrayTwo) {
  if(arrayOne.length !== arrayTwo.length){
    return false;
  } 
  for (let i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log("Assertation Passed")
  } else {
    console.log("Assertation Failed.")
  }
};

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(array[Math.round((array.length) / 2) - 1]);
    middleArray.push(array[Math.round((array.length) / 2)]);
  } else if (array.length % 2 === 1) {
    middleArray.push(array[Math.round((array.length - 1) / 2)]);
  }
  return middleArray;
}



assertArraysEqual([1, 3, 5], [3], false)
assertArraysEqual([2, 4, 6, 8,], [4, 6], false)

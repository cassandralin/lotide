const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

const without = function(sourceArray, removeArray) {
  let withoutArray = [];
  withoutArray = sourceArray.filter(function(element) {
    for (let i = 0; i < removeArray.length; i++){
      if (removeArray[i] === element) {
        return false;
      }
    }
    return true;
    return element !== removeArray;
  });
  return withoutArray;
};

console.log(without([1, 2, 3], [2, 3]));

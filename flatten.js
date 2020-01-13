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

const flatten = function (arrayInArray) {
  let newArray = [];
  for(let i = 0; i < arrayInArray.length; i++){
   if (Array.isArray(arrayInArray[i])){
    newArray = newArray.concat(arrayInArray[i]);
   } else {
     newArray.push(arrayInArray[i]);
   }
  }
  return newArray;
};
console.log(flatten([1,2, [3, 4], 5, 6]))





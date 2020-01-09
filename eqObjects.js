const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(objectOne, objectTwo) {
  var propertiesOne = Object.getOwnPropertyNames(objectOne); // ['a', 'b']
  var propertiesTwo = Object.getOwnPropertyNames(objectTwo); // ['a', 'b']
  if (!eqArrays(propertiesOne, propertiesTwo)) {
    return false; //using eqArray function to check if each array is the same. If it returns false then objects be false. if true must go to next check
  } 
  for (var i = 0; i < propertiesOne.length; i++){
    var propertyName = propertiesOne[i]; //e.g. propertiesOne[0] = 'a';
    var objectOneValue = objectOne[propertyName];
    var objectTwoValue = objectTwo[propertyName];

    if (Array.isArray(objectOneValue) && Array.isArray(objectTwoValue)) {
      if(!eqArrays(objectOneValue, objectTwoValue)) {
        return false;
      }
    } else if (objectOneValue !== objectTwoValue){
        return false;
    }
  }
  return true;
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




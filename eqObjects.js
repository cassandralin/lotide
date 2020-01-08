const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(objectOne, objectTwo) {
  var propertiesOne = Object.getOwnPropertyNames(objectOne);
  var propertiesTwo = Object.getOwnPropertyNames(objectTwo);
  if (propertiesOne.length !== propertiesTwo.length) {
    return false;
  } 
  for (var i = 0; i < propertiesOne.length; i++){
    var propertyName = propertiesOne[i];
    if (Array.isArray(propertiesOne[i]) === Array.isArray(propertiesTwo[i])){
    if (eqArrays(propertiesOne[i], propertiesTwo[i]) === false){
    return false;
   }
  }
  else if (objectOne[propertyName] !== objectTwo[propertyName]){
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

const name = {a: 1, b: [3, 4]};
const age = {a: 1, b: [3, 4]};
console.log(eqObjects(name, age));

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc));


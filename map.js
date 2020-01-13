const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback){
      results.push(callback(item));
    }
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

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


assertArraysEqual(["cats", "are", "the", "best"], ["dogs", "are", "also", "awesome"]);
assertArraysEqual(["lighthouse"], ["labs"]);
assertArraysEqual(["this", "is", "the", "same", "sentence"], ["this", "is", "the", "same", "se"]);
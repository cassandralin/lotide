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


const letterPositions = function(sentence) {
  const results = {};
  for (let position in sentence){
    var letter = sentence[position];
    if(results[letter]){
      results[letter].push(position);
    } else if (letter === " "){

    } else {
      results[letter] = [position];
    }
  }
  return results;
};



// assertArraysEqual(letterPositions("hello").e [1]);

console.log(letterPositions("any sentence"));
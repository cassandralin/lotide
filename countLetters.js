const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence){
  const results = {};
  console.log(sentence);
  for(const letter of sentence){
    if (results[letter]){
      results[letter] += 1; 
    } else {
      results[letter] = 1;
    }
  }
  return results;
};


const result1 = countLetters("hello");
assertEqual(result1['h'], 1)
console.log(countLetters("hello"));



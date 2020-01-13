const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([1]),[]) // => []
// assertArraysEqual(middle([1, 2]),[]) // => []
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1, 2, 5, 6]), [2, 5]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

describe("#middle", () => {
  it("returns the middle element of the array if it's an odd number", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns the [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
});
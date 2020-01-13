const assert = require('chai').assert;
const  eqArrays = require('../eqArrays');

// console.log(eqArrays([1, 2, 3], [1, 2, 3]))
// console.log(eqArrays([1, 2, 3], [3, 2, 1]))

describe("#eqArraysTest", () => {
  it("returns true if the arrays are the same", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2]));
  });
  it("returns false if the arrays are not the same", () => {
    assert.strictEqual("Lighthouse Labs", "Bootcamp"); 
  });
});
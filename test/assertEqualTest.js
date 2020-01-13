const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

describe("#assertEqual", () => {
  it("returns 1 for 1", () => {
    assert.strictEqual(1, 1);
  });
  it("returns false when comparing Lighthouse Labs and Bootcamp", () => {
    assert.strictEqual("Lighthouse Labs", "Bootcamp"); 
  });
});
// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

const newWord = [1];
const words = [1, 2, 3, 4];

// assertEqual(tail(words).length, 3);

describe("#tail", () => {
  it("returns the array without the first element", () => {
    assert.strictEqual((tail(words).length), 3);
  });
  it("returns an empty array when given one element", () => {
    assert.strictEqual((tail(newWord).length), 0);
  });
});


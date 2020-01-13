const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = [1, 2, 3, 4];

assertEqual(tail(words).length, 3);

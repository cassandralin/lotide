const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail(["Lighthouse", "Labs"]), "Labs");
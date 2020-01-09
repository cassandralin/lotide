const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(callback(item)){
      results.push(item);
    }
  }
  return results;
}



//"slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const data3 = [3, 6, 9, 19, 26, 5]

const results3 = takeUntil(data3, x => x > 6);

console.log(results3);

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(callback(item)){
      results.push(item);
    }
  }
  return results;
}





const data3 = [3, 6, 9, 19, 26, 5]

const results3 = takeUntil(data3, x => x > 6);

console.log(results3);

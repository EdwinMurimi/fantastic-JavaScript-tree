const lodash = require("lodash");

const pen = [1];
const other = lodash.concat(pen, "pen", true);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(pen);
// => [1]


lodash.sortedUniqBy([1.1, 2.1, 2.3, 2.4], Math.floor);
// [1,2,2,2]
// => [1.1, 2.3]

console.log(lodash.sortedUniqBy([1.1, 2.1, 2.3, 2.4], Math.floor));

console.log(lodash.now());


   
  
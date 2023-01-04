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


// Array Methods
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;


console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"

index = 10;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);

const arr1 = [1, 2, [3], [4, 5], 6, []];

console.log(arr1.flat(2));

console.log(arr1.flat().map(x => x*2));

const flattened = arr1.flatMap(num => num *2);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]




   
  
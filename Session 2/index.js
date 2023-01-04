/**
 * Number => int, float, double
 * Boolean => Boolean
 * String
 * Null
 * Undefined
 * Objects => Dict
 * Arrays => List
 */

// Number

const age = 45;

const payrate = 45.3;

console.log(typeof age);
console.log(typeof payrate);

// Boolean

const isLastAge = false;

const isViable = true;

console.log(isLastAge);
console.log(isViable);

const isViableToDrink = age < 46;

console.log(isViableToDrink);

// String

/**
 * single quotations
 * double quotations
 * backticks
 */

const name = 'John Doe';

let stringVariable = 'Hi ' + name + ', I am learning this language ' + (45 / 67 - 45) + ' called javascript ' + age + ' And so and ' + isViableToDrink;

console.log(stringVariable);

stringVariable = "Hey " + name + ", It's Tuesday " + age;

console.log(stringVariable);


// String interpolation
stringVariable = `Hey ${name}, I feel good about this JavaScript ${age} ${isViable}`;

console.log(stringVariable);

// `RP_Reservations_${datetime.split('/').join('.')}.csv`

console.log(`javascript code ${34 / 67 + 6}`);

const nullVariable1 = null;

let nullVariable2 = null;

let undefinedVariable2;

console.log(nullVariable1, nullVariable2, undefinedVariable2);

// Objects

const userInformation = {
    username: 'JohnDoe',
    email: 'johndoe@gmail.com',
    age: 34
}

console.log(userInformation.email);
console.log(userInformation.username);
console.log(userInformation.age);

// destructring
const { email } = userInformation;

console.log(email);

const anotherObject = {
    userName: 'JohnDoe',
    Email: 'johndoe@gmail.com',
    Age: 34,
    Hobbies: ['Hockey', 'Hiking', 'Driving'],
    Adventures: ['Mt. Kenya', 'Mt. Elgon', 'Rift Valley'],
    IsFamilyMan: true,
    "family name": "Jimenez cartel"
}

const { Hobbies, Adventures } = anotherObject;

console.log(Hobbies);
console.log(Adventures);

const newAge = 45;

// ES6+: an object takes in key: value but in ES6+ id the key name and the value name are the same you can have the key alone
const stillAnotherObject = {
    name: 'Sam Smith',
    newAge
}

console.log(stillAnotherObject);

// Arrays
const names = ['John', 'Peter', 'Simon', 'Jesee', 'Sam'];

// accessing elements in an array using indexes
console.log(names[1]);

names.push('Edwin');

names.unshift("Nancy");

console.log(names);

console.log(names.push("Another Name"));
console.log(names.unshift("Another Name"));

console.log(names);

/**
 * [
  'Another Name',
  'Nancy',
  'John',
  'Peter',
  'Simon',
  'Jesee',
  'Sam',
  'Edwin',
  'Another Name'
]
 */

console.log(names.slice(1, 4)); // This returns a new array.

// Take note of what an array method returns. It is very important otherwise you will be stuck in a bug that is simple.
const abc = names.push("Elon");
console.log(abc); // this returns a number

// but the below line will throw an error because you cannot try to index a number. indexing is only possible in arrays
console.log(abc[0]);

// includes: checks to see if a certain value I pass to it is contained in an array. in return it gives back a boolean
names.includes("Musk");

// destructuring arrays

console.log("Final array => ", names);
const [first, second, ...third] = names;

console.log(first);
console.log(second);
console.log(third);


const multipleDataTypes = [1, false, `Date: ${new Date()}`, 'John Doe', { occupation: 'driver' }, ['james'], 34.5, null, undefined];

// OBJECTS WITH ARRAYS

const anotherObject1 = {
    userName: 'JohnDoe',
    Email: 'johndoe@gmail.com',
    Age: 34,
    Hobbies1: ['Hockey', 'Hiking', 'Driving'],
    Adventures1: ['Mt. Kenya', 'Mt. Elgon', 'Rift Valley'],
    IsFamilyMan1: true,
    "family name": "Jimenez cartel"
}

const { Hobbies1, Adventures1 } = anotherObject1;

console.log(Hobbies1.push('Swimming'));
Hobbies1.unshift("Earing");

const shallowCopy = Hobbies1.splice(0, 2);

console.log(shallowCopy);

console.log(anotherObject1.Hobbies1);


// MORE ARRAY METHODS, REST AND SPREAD OPERATOR.
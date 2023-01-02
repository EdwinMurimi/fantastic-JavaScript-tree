// In order for us to run JS outside a browser we need node.
// Just like in the browser example we need to take note of our folders and current directory
// When executing this file make sure you are inside the Session 1/Running JavaScript oustide a Browser directory
// once you are in this directory then it is as simple as node <filename>.js in our case it would be node index.js

// most of the concepts here will be similar to what is in the Running JavaScript in the Browser

// Variable declarations

/**
 * Using var is not a recommended way of declaring variables but you might find var in legacy systems. If you do find it in legacy systems
 * don't feel obligated to change it because you might introduce bugs to the system that was already tested and certified for public use.
 * var however introduces a problem called variable scoping problem which I would like you to do an indepth research about for you to
 * understand it.
*/

// The below lines were written to try and demo what the problem is. By the time you are goin through this you might have some understanding
var nancy = 10;
var nancy = 20;


/**
 * The other way of declaring variables is using `const` and `let` keywords.
 * Use `let` when a variable will change
 * Use const when you are sure that a variable is not changing.
 * It is always nice to evaluate the situation before you decide on what you want to use.
 * Wrong choice could lead to program breakdown and alot of bugs in future.
 * This should however not scare you because it is an easy choice of whether or not something is deemed to change down the code.
 */

// CONST and LET

/**
 * The below program will generate an error in JS runtime because we earlier said that if we use const
 *  we need to be sure that value is not changing
 */
const age = 20;
age = 21;

/**
 * The below program does not generate an error because `let` keyword allows for a value change
 */
let newAge = 40;
newAge = 41

// Simple console.log to visualize our values
console.log(age);


// USECASES FOR CONST

/**
 * Earlier on we had said that if we declare a value in `const` we cannot modify the value as that would throw an error
 * In the below usecases we introduce something new.
 * I will be declaring 2 variables, an array (what we call a list in python) and an object (what we call a dictionary in python)
 * I want you to take note that any modification in the 2 variables does not throw an error in JS but if we entirely change the whole
 * variable from an array to a number or from an object to a number then that throws an error.
 * Take note that it is not the modification of the variables that causes the error but the changing of the variables
 */

// Our first example: We have an array declared in `const`
const ages = [1, 3, 5, 7, 8, 3];

// adding a value to the end of it does not cause an error
ages.push(3560); // .push() method is similar to .append() in python

// but changing the whole variable to a number will cause an error
ages = 3560;

// simple console.log to see the ages but it will not be executed unless we get rid of the line at number 68
console.log(ages);

// Our second example: We have an object declared in `const`
const summary = {
    name: "Nancy",
    occupation: "Software Developer"
}

// modifying the name from Nancy to Peter does not cause an error
summary.name = "Peter" // you can also change the name by doing this: summary["name"] = "Peter";

// but changing the whole variable to a number will cause an error
summary = 3560;

// simple console.log to see the summary but it will not be executed unless we get rid of the line at number 83
console.log(summary);


/**
 * Another usecase of the `const` keyword is to declare functions. Later on when we discuss more about functions
 * we will see why `const` is a better option for ES6 functions unlike `let`
*/
const name = () => "Hello World"; // ES6 function and FAT ARROW function

const name1 = () => "Ahoy";

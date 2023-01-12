// discuss functions and how they are declared only

// function declaration

// ES5-
function sampleFunction() {
    // this is where the logic is
}

const age1 = 10;
const value = 34;
// function with parameters: 1 or more
function functionThatTakesParameters(age1, value) {
    // do some logic with age1 and value
}

function functionWithOneParemeter(age1) {
    // do some logic with age1
}

function sumOfTwoNumbers(num1, num2) {
    // below is logic to return sum of the two numbers
    return num1 + num2;
}

// ES6+
const age = () => {};
const anotherSampleFunction = () => {};

// ES6 with 1 parameter it is not a must for us to have the bracket

const es6FunctionWithOneParameter = age1 => {
    // logic to do on es6
};

const es6FunctionWithMultipleParameter = (age1, value) => {
    // logic to do on es6
};

const es6FunctionToReturnSumOfTwoNumbers = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}




const sumOfValuesAboveANumberInAnArray = (array, numberLimit) => {
    let sum = 0;
    for(let element of array) {
        if(element > numberLimit) {
            // sum = sum + element;
            sum += element;
        }
    }
    return sum;
}

const myArray = [4, -2, 6, 9, 1, 12, 6, 2, 10];

let result = sumOfValuesAboveANumberInAnArray(myArray, 5);

console.log(result);

result = sumOfValuesAboveANumberInAnArray(myArray, 10);

console.log(result);

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
const axios = require('axios');
const _ = require('lodash');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getInformationFromOurFakeEndpoint = async endPointUrl => {
    const results = await axios
        .get(endPointUrl);
    return results;
}

// https://jsonplaceholder.typicode.com/posts
const postsResults = getInformationFromOurFakeEndpoint(`${BASE_URL}/posts`);

console.log(postsResults);

// https://jsonplaceholder.typicode.com/users
const usersResults = getInformationFromOurFakeEndpoint(`${BASE_URL}/users`);

console.log(usersResults);

// ASYNC...AWAIT in ES5 functions

async function sampleFunctionUsingAsyncAwait() {
    // logic here
    // const result = await <logic here>
}

// ASYNC...AWAIT in ES6 functions

const af = async () => {
    // logic here
    // const result = await <logic here>
}

// ES6 important to know

const func1 = () => {}

const func2 = async () => {}

const func3 = param1 => {}

const func4 = async param1 => {}

const func5 = (param1, param2) => {}

const func6 = async (param1, param2) => {}


// age > 18: allowed
// not allowed

const checkList1 = age => {
    let status;
    if(age > 18) {
        status = 'Allowed to use the giant wheel';
    } else {
        status = 'Not allowed to use the giant wheel';
    }
    return status;
}

let statusResponse = checkList1(23);

console.log(statusResponse);

function checkList2(age) {
    if(age > 18) return 'Allowed to use the giant wheel';
    return 'Not allowed to use the giant wheel';
}

statusResponse = checkList2(3);

console.log(statusResponse);

const checkList3 = age => age > 18 ? 'Allowed to use the giant wheel' : 'Not allowed to use the giant wheel';

statusResponse = checkList3(18);

console.log(statusResponse);


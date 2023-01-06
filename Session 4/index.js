// conditional statements and loops

// Conditional statements
const number = 45;
if(number < 60) {
console.log("NUMBER IS LESS THAN 60");
} else {
    console.log("NUMBER IS MORE THAN 60");
}

if(number < 10) {

} else if(number < 20) {

} else if(number < 30) {

} else {

}

// ternary operator

// expression ? <out in the logic if the expression evaluates to a true> : <this is where you put in the logic if the condition evaluates to a false>

number < 60 ? console.log("NUMBER IS LESS THAN 60") : console.log("NUMBER IS MORE THAN 60");

const targets = [
    {
        id: 1,
        children: [1, 2, 3, 4, 5],
        name: "John Doe"
    },
    {
        id: 2,
        children: [5698, 35, 457, 3256]
    },
    {
        id: 3,
        children: []
    }
];

console.log(
    targets.map(target => {
        if(target.children && target.children.length) {
            console.log(target);
        } else if(target.children) {
            console.log(target.id);
        } else {
            console.log("SOMETHING IS WRONG WITH THIS OBJECT");
        }
    })
);

console.log(
    targets.map(target => {
        target.children && target.children.length ? console.log(target) : console.log(target.id);
    })
);

// NESTING TERNARY

// <EXPRESSION> ? <ANOTHER EXPRESS> ? <ANOTHER EXPRESSION TRUE VALUE> : <ANOTHER EXPRESSION FALSEY VALUE> : <EXPRESSION FALSEY VALUE>;

// 6 < 10 ? 5 < 3 ? console.log("5 IS NOT LESS THAN 3") : console.log("5 IS LESS THAN 3") : console.log("6 IS NOT LESS THAN 10");

// GUARD CLAUSES

// if() return

console.log(
    targets.map(target => {
        if(target.id > 1) {
            if(target.children && target.children.length) return target;
            if(target.children) return target.id;
            return "SOMETHIGN WENT WRONG";
        } else {
            if(target.children && target.children.length) {
                console.log(target);
            } else if(target.children) {
                console.log(target.id);
            } else {
                console.log("SOMETHING IS WRONG WITH THIS OBJECT");
            }
        }
        
    })
);

// [] and {}

// FOREACH, MAP, FLATMAP, FLAT == HIGH ORDER ARRAY METHODS

// FOR LOOP, WHILE LOOP, DO..WHILE LOOP, FOR...OF LOOP, FOR...IN LOOP

/**
 * [
 *      index: 0
        {
            id: 1,
            children: [1, 2, 3, 4, 5]
        },
        index: 1
        {
            id: 2,
            children: [5698, 35, 457, 3256]
        },
        index: 2
        {
            id: 3,
            children: []
        }
    ];
    array length: 3
 */

// for(initializer; condition; iterator) {

// }

for(let i = 0; i < targets.length; i++) {
    console.log(`${targets[i].id} - ${targets[i].children}`);
}

for(let i = 0; i < targets.length; i++) {
    console.log(targets[i]);
}

for(let i = targets.length - 1; i >= 0; i--) {
    console.log(`${targets[i].id} ${targets[i].children}`);
}

const numbers = [1, 3, 56, 7, 4, 7, 4, 76, 4, 7, 4];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/**
 * initializer
 * 
 * while(condition) {
 * 
 *  iterator
 * }
 */

let i = 0;

while(i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

while(i < targets.length) {
    console.log(targets[i]);
    i++;
}

/**
 * INITIALIZER
 * 
 * do {
 * 
 *  iterator/increment statement
 * } while(condition);
 */

console.log("DO...WHILE STARTS HERE");

let j = 0;

do {
    console.log(numbers[j]);
    j++;
} while(j < numbers.length);

// FOR...OF LOOP

/**
 * Returns elements
 * for(let variable of array) {
 * 
 * }
 */

console.log("FOR...OF STARTS HERE");
for(let target of targets) {
    console.log(target.children);
}


// FOR...IN LOOP
/**
 * returns indexes
 * for(let variable in array) {
 * 
 * }
 */

console.log("FOR...IN STARTS HERE");
for(let target in targets) {
    console.log(target);
}

// REST and SPREAD operator

// ...

/**
 * spread - start or end of the right-side expression
 * rest - end of the left-side expression
 */

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

const [one, two, ...three] = targets;

console.log(one, two, three);

// SPREAD

// joining two datatypes - array or object

const objectOne = {
    name: 'John Doe',
    id: 1,
    children: [1, 2, 3, 4, 5]
}

const objectTwo = {
    username: 'johndoe',
    hobbies: ['Hockey', 'Hiking', 'Driving'],
    adventures: ['Mt. Kenya', 'Mt. Elgon', 'Rift Valley']
}

const joiningOne = { ...objectOne, objectTwo }
const joiningTwo = { objectOne, ...objectTwo }
const joiningThree = { ...objectOne, ...objectTwo }

console.log(joiningOne.objectTwo.adventures);

console.log(joiningTwo.adventures);

console.log(joiningThree);

const joiningArrayOne = [...targets, numbers];

console.log(joiningArrayOne);

const joiningArrayTwo = [targets, ...numbers];

console.log(joiningArrayTwo);

// spread - right-side of the expression

// rest - left-side of the expression

// const variable<left-side> = whatever<right-side>;


// lingking a JS file
let js = 'amazing';
// if (js === 'amazing') alert ('JavaScript is fun!');

console.log(40+8-7);


// values and variables
// let firstName = 'Julie';
// console.log(firstName);

// assignments
let country = "United States";
let continent = "North America";
let population = 10000;

console.log(country);
console.log(continent);
console.log(population);


// 
let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = "yes";
console.log(typeof javaScriptIsFun);

// let year;
// console.log(typeof year);

// year = 2023;
// console.log(typeof year);

console.log(typeof null);


// string template
const firstName = "Julie";
const job = "student";
const birthYear = 1998;
const year = 2023;

const sentence = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(sentence);


const newSentence = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(newSentence);


console.log('string with \n\
multiple \n\
lines');

console.log(`String
with
multiple
lines`);


// type conversion and coercion
// conversion
const inputYear = "1998";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Julie')); // NaN, actually an invalid number
console.log(typeof NaN); // number

console.log(String(23));


// coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3); // string, '23103', plus operator will convert number to string
console.log('23' - '10' - 3); // number, 10
console.log('23' * '2'); // number, 46
console.log('23' / '2'); // number, 11.5

let n = '1' + 1;
n = n - 1;
console.log(n); // number, 10

console.log(2+3+4+'5'); // string, '95'

console.log('10'-'4'-'3'-2+'5'); // string, '15'


// falsy and truthy
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Julie')); // true
console.log(Boolean(''));  //false
console.log(Boolean({})); // true

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log("height is defined");
} else {
    console.log("height is UNDEFINED");
}


const age = '18';
if (age === 18) console.log("age is 18 (strict)");
if (age == 18) console.log("age is 18 (loose)");


const favorite = prompt("What's your fav num?");
console.log(favorite);
console.log(typeof favorite);

if (Number(favorite) === 23) console.log("23 is cool");


// function and function expression
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1998);

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1998);

// arrow functions
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1998);

console.log(age1, age2, age3);


const yearsUnitilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUnitilRetirement(1998, "Julie"));





const greet = (greeting) => (name) => {
        console.log(`${greeting} ${name}`);
}

greet('Hi')('Julie');
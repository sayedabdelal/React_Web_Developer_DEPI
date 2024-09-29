// Exercices in MATH object

// 1-Find the Maximum Value------->input :: 1,2,3,4,5 --->output :: max value is  5

const max = Math.max(1, 2, 3, 4, 5);
console.log('max value is ', max);

// -Find the Minimum Value------->input :: 1,2,3,4,5 --->output :: min value is  1

const min = Math.min(1, 2, 3, 4, 5);
console.log('min value is ', min);

// -Round a Number-->input 3.5--->output 4 , 3.2 ---> 3

const round1 = Math.round(3.5);

// Ceil a Number-->input 3.2--->output 4 , 3.9 ---> 4

const ceil = Math.ceil(3.2);
console.log(ceil);

// Floor a Number -->input 3.2--->output 3 , 3.9 ---> 3
const floor = Math.floor(3.9);
console.log(floor);

// Generate a Random Number between 0 and 1
const random = Math.random(0, 1);
console.log(random);

// Get the Value of Pi
const pi = Math.PI;
console.log(pi);


// create functon that convert Degrees to Radians

function degreesToRadians(degrees) { 
    return degrees * (Math.PI / 180);
}
console.log(degreesToRadians(180));

// -create funtion that  that erases rational numbers from the array
function eraseRationalNumbers(arr) {
    return arr.map(Math.trunc);
}
console.log(eraseRationalNumbers([1.2, 3.4, 5.6, 7.8]));

// Write a JavaScript function to find the highest value in an array.
function maxArray(arr) {
    return Math.max(...arr);
}
console.log(maxArray([1, 2, 3, 4, 5]));

// -write a javascript function that generate random numbers and store them in an array the function specifies array length and random number scope
function generateRandomNumbers(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}
console.log(generateRandomNumbers(5, 1, 10));

// local storage and json object
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// 2-Retrieve a Simple Value from Local Storage

const userr = localStorage.getItem('user');

// 3-Remove a Value from Local Storage
localStorage.removeItem('user');

// 4-Clear All Values from Local Storage
localStorage.clear();

// 5-Store a JSON Object in Local Storage
localStorage.setItem('user', JSON.stringify(user));

// 6-Retrieve a JSON Object from Local Storage
const user1 = JSON.parse(localStorage.getItem('user'));

// 7-heck if a Key Exists in Local Storage
const exists = localStorage.getItem('user') !== null;

// 8-Update a Value in Local Storage
const user2 = JSON.parse(localStorage.getItem('user'));
user2.age = 40;
localStorage.setItem('user', JSON.stringify(user2));

// 9-Store an Array in Local Storage
const laptops = [
    { name: 'Laptop 1', price: 1000 },
    { name: 'Laptop 2', price: 1500 },
    { name: 'Laptop 3', price: 2000 }
];
localStorage.setItem('laptops', JSON.stringify(laptops));

// 10-Retrieve an Array from Local Storage
const laptops1 = JSON.parse(localStorage.getItem('laptops'));

// 11-Implement a Function to Save Data to Local Storage
function saveToLocalStorage() {
    localStorage.setItem('laptops', JSON.stringify(laptops));
}

// spread operators
// note sread in array mean to convert arr from [1,2,3,4,5,6] to ---> 1,2,3,4,5,6 remove square brackets
const arr = [1, 2, 3, 4, 5, 6];
console.log(...arr);

// spread in object mean conver obj from {a:1,b:"hello"} to a:1,b:"hello " remove curly brackets
const obj = { a: 1, b: 'hello' };
console.log(...obj);

// 1-copy an Array into Another Array
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];

// 2-Spread an Object into Another Object-----> obj1{ a: 1, b: 2 } obj2{c:3}--->output {a:1,b:2,c:3}
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const obj3 = { ...obj1, ...obj2 };
// 3-Spread an Array into Another Array --->input arr1=[1,2]  arr2=[3,4]---->final output [3,4,1,2]
const arr4 = [1, 2];
const arr5 = [3, 4];
const arr6 = [...arr5, ...arr4];
// 4-Copy an Object Using Spread Operator
const obj4 = { a: 1, b: 2 };
const obj5 = { ...obj4 };


// 5-Spread Elements of an Array as Arguments to a Function
function sum(a, b, c) {
    return a + b + c;
}
const arr7 = [1, 2, 3];
const result = sum(...arr7);


// 6-Combine Two Arrays Using Spread Operator
const arr8 = [1, 2];
const arr9 = [3, 4];
const arr10 = [...arr8, ...arr9];

// 7-Spread a String into an Array of Characters
const str = 'hello';
const chars = [...str];


// 9-Clone and Add Properties to an Object
const obj6 = { a: 1, b: 2 };
const obj7 = { ...obj6, c: 3 };

// Destructuring

// 1-Basic Array Destructuring
const arr11 = [1, 2, 3];
const [x, y, z] = arr11;

// 2-Destructure and Ignore Elements ----> arr[1,2,3] create variables that have 1 and 3 values ignore the second element
const arr12 = [1, 2, 3];
const [x1, , z1] = arr12;


// 4-Destructure with Default Values
const arr13 = [1];
const [x2, y2 = 2] = arr13;


// 5-Destructure Nested Arrays
const arr14 = [1, [2, 3], 4];
const [x3, [y3, z3], w3] = arr14;

// 6-Swap Variables Using Destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];

// 7-Basic Object Destructuring
const obj8 = { a: 1, b: 2 };
const { aa, bb } = obj8;

// 8-Destructure with Default Values
const obj9 = { a: 1 };
const { aa1, bb1 = 2 } = obj9;

// 9-Destructure Nested Objects
const obj10 = { a: { b: 1 } };
const { a: { b: c } } = obj10;

// 10-Rename Variables of object During Destructuring
const obj11 = { a: 1 };
const { a: aa2 } = obj11;

// 11-Nested Destructuring with Default Values 
const obj12 = { a: { b: 1 } };
const { a: { b: c1 = 2 } } = obj12;


// rest pattern

// 1-Capture All Elements Except the First One in an Array
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);


// 2-Ignore First Two Elements and Capture the Rest
const [, , ...rest1] = [1, 2, 3, 4, 5];

// 3-Sum Function Using Rest Parameters
function sum1(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}


// Array Functions

// 1-Create an array and add an element using push().
const arr15 = [1, 2, 3];
arr15.push(4);

// 2-Remove the last element from an array using pop().
arr15.pop();


// 3-Remove the first element from an array using shift().
arr15.shift();

// 4-Add an element to the beginning of an array using unshift().
arr15.unshift(0);

// 5-Combine two arrays using concat().
const arr16 = [4, 5];
const arr17 = arr15.concat(arr16);

// 6-Extract a portion of an array using slice().
const arr18 = arr17.slice(1, 3);

// 7-Remove elements from an array using splice().
arr17.splice(1, 2);

// 8-Find the index of an element in an array using indexOf().
const index = arr17.indexOf(5);


// 9-Check if an array includes a certain value using includes().
const included = arr17.includes(5);

// ----------------------------------------------------------------------------------
// String Functions

// 1-Get the length of a string.
const str1 = 'hello';
const length = str1.length;

// 2-Convert a string to uppercase.
const uppercase = str1.toUpperCase();


// 3-Convert a string to lowercase.
const lowercase = str1.toLowerCase();

// 4-Get the character at a specific index.
const char = str1.charAt(0); 

// 5-Find the index of a substring.
const index1 = str1.indexOf('e');

// 6-Replace a substring with another string.
const replaced = str1.replace('e', 'a');

// 7-Split a string into an array.
const arr19 = str1.split('');
// 8-Check if a string contains a substring.
const contains = str1.includes('e');

// 9-Extract a portion of a string.
const sliced = str1.slice(1, 3);














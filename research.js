// ==============================
// RESEARCH AREAS
// 1. ARRAY METHODS
// ==============================


// (a.) map() ~ creates a new array by modifying each item
let numbers = [1, 2, 3];

let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


// (b.) filter() ~ creates a new array with elements that pass a condition
let ages = [12, 18, 25];

let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25]


// (c.) reduce() ~ reduces an array to a single value
let marks = [50, 60, 70];

let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total); // 180


// (d.) forEach() ~ executes a function for each array element
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});


// (e.) find() ~ returns the first element that matches a condition
let scores = [30, 45, 80];

let firstPass = scores.find(score => score >= 50);
console.log(firstPass); // 80


// (f.) some() ~ checks if at least one element meets a condition
let hasPass = scores.some(score => score >= 50);
console.log(hasPass); // true


// (g.) every() ~ checks if all elements meet a condition
let allPassed = scores.every(score => score >= 30);
console.log(allPassed); // true


// (h.) sort() ~ sorts array elements
let nums = [10, 2, 5];

nums.sort((a, b) => a - b);
console.log(nums); // [2, 5, 10]


// (i.) includes() ~ checks if an array contains a value
let colors = ["red", "blue", "green"];

console.log(colors.includes("blue")); // true


// (j.) concat() ~ joins two or more arrays
let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

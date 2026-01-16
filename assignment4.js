// ASSIGNMENT 1
const name = "Amani";
let age = 21;
const city = "Nairobi";
const superpower = "invisibility";

console.log(
  `${name} is ${age} years old and lives in ${city}. Her superpower is ${superpower}.`
);


// ASSIGNMENT 2
let languages = ["JavaScript", "Python", "Java", "C++"];

console.log("First language:", languages[0]);
console.log("Last language:", languages[languages.length - 1]);
console.log("Total languages:", languages.length);

// Bonus
languages.push("Go"); // add
languages.pop(); // remove last
console.log("Updated array:", languages);


// ASSIGNMENT 3
const student = {
  name: "Shanice",
  age: 20,
  course: "Computer Science",
  isEnrolled: true,
};

console.log(
  `${student.name} is enrolled in ${student.course} and her enrollment status is ${student.isEnrolled}.`
);


// ASSIGNMENT 4
let cpuUsage = 65;
let memoryUsage = 60;

if (cpuUsage < 70 && memoryUsage < 70) {
  console.log("System running smoothly");
} else {
  console.log("System overload detected");
}


// ASSIGNMENT 5
let scores = [78, 45, 90, 33, 67];

for (let score of scores) {
  if (score >= 50) {
    console.log(score, "Pass");
  } else {
    console.log(score, "Fail");
  }
}


// ASSIGNMENT 6
const product = {
  name: "Laptop",
  price: 75000,
  inStock: true,
};

if (product.inStock) {
  console.log("Product available");
} else {
  console.log("Out of stock");

}

// ASSIGNMENT 7
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Launch!");


// ASSIGNMENT 8
let numbers = [12, 7, 9, 20, 33, 40];

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}


// ASSIGNMENT 9
let attendance = [true, false, true, true, false];

let present = 0;
let absent = 0;

for (let status of attendance) {
  if (status) {
    present++;
  } else {
    absent++;
  }
}

console.log("Present:", present);
console.log("Absent:", absent);


// ASSIGNMENT 10
let users = [
  { name: "Alex", role: "admin" },
  { name: "Brenda", role: "student" },
  { name: "Chris", role: "admin" },
];

for (let user of users) {
  if (user.role === "admin") {
    console.log(user.name + ": Access granted");
  } else {
    console.log(user.name + ": Access denied");
  }
}

// ASSIGNMENT 11
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "#";
  }
  console.log(pattern);
}

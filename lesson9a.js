// JAVASCRDIPT FUNCTIONS
// Function ~~Reusable block of code that does something
// They are named, call them by their name

function greet() {
  console.log("Hello World!");
}
greet();

// sum two numbers
function Addition() {
  let num1 = 78;
  let num2 = 45;
  let sum = num1 + num2;
  console.log("The sum is", sum);
}
Addition();

// Multiplication
function multiple() {
  let numb1 = 30;
  let numb2 = 20;
  let multiple = numb1 * numb2;
  console.log("The multiple of numb1 and numb2 is", multiple);
}
multiple();

// Additional information
// Parameters/Arguments ~ Additional daata we pass inside functions

function greetByName(name) {
  console.log("Hello", name);
}
greetByName("Esther");
greetByName("Kelly");
greetByName("Shanice");

// SUBTRACTION

function subtraction(num1, num2) {
  let subtraction = num1 - num2;
  console.log("The difference is", subtraction);
}
subtraction(50, 30);

// USE PARAMETERS TO DO DIVISION

function divide(num1, num2) {
  let division = num1 / num2;
  console.log("The division of num1 and num2 is", division);
}
divide(60, 20);

// Function that limits event access

function eventHub(age) {
  if (age > 1 && age < 18) {
    console.log("User Restricted! this is a +18 event!");
  } else {
    console.log("Book the ticket at the website...Enjoy!");
  }
}
eventHub(17);
eventHub(20);
 
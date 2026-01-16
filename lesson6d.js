// nested ternary operator====u use nested if
//placing an if inside another if statement
// used to check multiple conditions step by step
// (eg) checking age and country

let age = 20;
let country = "UG";

if (age >= 18) {
  console.log("You are of age, you can vote.");
  // another if statement
  if (country != "Kenya") {
    console.log("You must be a registered Kenyan citizen to vote!");
  } else {
    console.log("You can vote in Kenya.");
  }
} else {
  console.log("You are too young to vote");
}

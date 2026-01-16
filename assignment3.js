//(1) write a program that checks wheteher a number is even or odd

let number = 6; 

let result = (number % 2 === 0) ? "The number is even" : "The number is odd";
console.log(result);


// (2) write js program using nested if-else statements to validate a login attempt.
let username = "Esther"; 
let password = "12345";    

if (username === "Esther") {
  if (password === "12345") {
    console.log("Login successful!");
  } else {
    console.log("Wrong password.");
  }
} else {
  console.log("Username not found.");
}

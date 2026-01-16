// Function to check if a call is allowed

function airtimeChecker(balance, costPerMinute, minutes) {
  let totalCost = costPerMinute * minutes;

  // Compare total cost with balance
  if (balance >= totalCost) {
    console.log("Call allowed");
  } else {
    console.log("Insufficient balance");
  }
}

// Calling the function
airtimeChecker(100, 10, 5);
airtimeChecker(30, 10, 5);

// Assignment 2

function calculateFare(distance) {
  let baseFare = 200;
  let costPerKm = 50;
  let totalFare = baseFare + distance * costPerKm;

  console.log("Total fare is", totalFare);
}

calculateFare(10);


// ASSIGNMENT 3

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  let category;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  console.log("BMI is", bmi.toFixed(2));
  console.log("Category:", category);
}

calculateBMI(70, 1.75);

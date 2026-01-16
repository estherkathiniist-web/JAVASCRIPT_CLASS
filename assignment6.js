// QUESTION 1 ~ SHIPPING COST CALCULATOR
function calculateShipping(weight) {
  if (weight >= 10) {
    return "Free shipping";
  } else if (weight <= 1) {
    return "$5";
  } else if (weight <= 5) {
    return "$10";
  } else {
    return "$20";
  }
}

console.log(calculateShipping(0.5));
console.log(calculateShipping(3));
console.log(calculateShipping(6));
console.log(calculateShipping(10));

// QUESTION 2 ~ GRADING STUDENTS
function gradeStudent(marks) {
  if (marks >= 80) {
    return "Grade: A – Excellent performance";
  } else if (marks >= 60) {
    return "Grade: B – Very good";
  } else if (marks >= 40) {
    return "Grade: C – Fair performance";
  } else {
    return "Grade: F – Needs improvement";
  }
}

console.log(gradeStudent(85));
console.log(gradeStudent(70));
console.log(gradeStudent(50));
console.log(gradeStudent(30));

// QUESTION 3 ~ VALIDATING USERNAMES
function validateUsername(username) {
  if (username.indexOf(" ") !== -1) {
    return "Invalid username: no spaces allowed";
  } else if (username.length < 4) {
    return "Too short!";
  } else {
    return "Valid Username";
  }
}

console.log(validateUsername("Ann"));
console.log(validateUsername("John Doe"));
console.log(validateUsername("Esther"));

// QUESTION 4 ~ SENDING MESSAGES
function sendMessage(user, message) {
  return user + ', you have a new message:\n"' + message + '"';
}

console.log(sendMessage("Shanice", "Your order has been shipped!"));
console.log(sendMessage("Esther", "Your assignment is ready."));

// QUESTION 5 ~ SIMPLE GAME SCORE TRACKER
var score = 0;

function addPoints(points) {
  score = score + points;
}

function subtractPoints(points) {
  score = score - points;
}

function resetScore() {
  score = 0;
}

// Simulating a short game
addPoints(10);
addPoints(5);
subtractPoints(3);

console.log("Final Score:", score);

// Bonus test
resetScore();
console.log("Score after reset:", score);

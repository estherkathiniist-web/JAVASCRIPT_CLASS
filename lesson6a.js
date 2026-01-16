// Switch and break statement.
// Works same way as if-else
// Checks one value against multiple values to find a match
// break---stop executing if case matches

let day = "Thursday";

switch (day) {
  case "Monday":
    console.log("Start on a high note. Plan your week");
    break;
  case "Tuesday":
    console.log("Keep Going!🤗");
    break;
  case "Wednesday":
    console.log("Yay! Days are moving fast!");
    break;
  case "Thursday":
    console.log("Tommorow will be furahi daaaay!😎");
    break;
  case "Friday":
    console.log("Here comes the weekend!");
    break;
  case "Saturday":
    console.log("Family timeeeeee!");
    break;
  case "Sunday":
    console.log("Ah! Such a short weekend, sunday is over?!😏");
    break;
  default:
    console.log("Try again for quotes!");
}

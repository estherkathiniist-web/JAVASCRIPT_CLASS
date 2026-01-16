// program that calculates the final amount to pay after dicount
let amount = 5000; 
let discount = 0;

if (amount > 10000) {
    discount = 0.20;
    console.log("You've earned a 20% discount!");
}
else if (amount >= 5000) {
    discount = 0.10;
    console.log("You've earned a 10% discount!");
}
else if (amount >= 1000) {
    discount = 0.05;
    console.log("You've earned a 5% discount!");
}
else {
    discount = 0;
    console.log("No discount available.");
}

let finalAmount = amount - (amount * discount);

console.log("Final Amount to Pay: KES " + finalAmount);

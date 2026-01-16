// Ternary operators => if else shortcut
// condition? value if true: value if false

// example 1
let age = 12;

let message = (age>=18)? "Can Vote": "Can't Vote!";
console.log(message);

// example 2
 
let weather = "Sunny";

let message2 =(weather==="Sunny")? "Wear Shorts": "Wear Trousers";
console.log(message2);

// example 3(nested)

let Age =20;
let country = 'UG';

if (Age>=18){
    console.log('You are of age, you can vote.');
    // another if statement
    if (country!=Kenya){
        console.log('You must be a registered Kenyan citizen to vote!');
    }
}
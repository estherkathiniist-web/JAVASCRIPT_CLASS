// 01/12/2025  assignment on arrays and object

// JS ARRAYS
// (a).Creating arrays and outputs
let fruits = ["Mango", "Banana", "Orange"];
console.log(fruits);

let numbers = new Array(10, 20, 30);
console.log(numbers);

let colors = ["Red", "Blue", "Green"];
console.log(colors);

// (b).Accessing array item
let cars = ["Toyota", "Honda", "Mazda"];

console.log(cars[0]); 
console.log(cars[2]); 

//Js Object stores data in key value pairs
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
console.log(car.brand);    
console.log(car.year);     
console.log(car.model)

//objects can hold arrays or other nested objects,object is a variable that can hold many variables.

//arrays
let student = {
  name: "Ann",
  marks: [80, 75, 90]
};

console.log(student.marks);
console.log(student.marks[2]);

//nested objects
let employee = {
  name: "Ann",
  address: {
    county: "Makueni",
    town: "Wote"
  }
};

console.log(employee.address.town);

let person = {
  firstname: "Esther",
  age: 22
};

let x = "firstname";
let y = "age";

console.log(person[x] + " is " + person[y] + " years old.");

// 02/12/2025 create an object student (name, adm no, class, age)
let Student={
name:'Esther',
adm_no:250383,
class:'Software Development',
age:23
}

// view students name, adm no.
console.log(Student.name);
console.log(Student.adm_no);

// update students details
Student.gender='Female';
console.table(Student);

// delete one student detail
delete Student.age;
console.table(Student);

// assignment
// calculate thr total shopping cost
// bread ksh 50
// milk ksh 60
// eggs 20*6

let bread = 50;
let milk = 60;
let eggs= 20*6;
let formula = bread + milk + eggs;
console.log(formula);

// calculate net salary after deductions
// gross salary ksh 50 000
// PAYE = 10%
// NHIF = ksh500
// NSSF =ksh200

let grossSalary =50000;
let PAYE=50000*(10/100);
let NHIF=500;
let NSSF=200;
let netSalary= grossSalary-PAYE-NHIF-NSSF;
console.log(netSalary);


  
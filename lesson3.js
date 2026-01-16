// JS OBJECT
let myCar={
    name:'Mercedes',
    engine:'V8',
    color:'White',
    year:2020
}

// accessing the myCar details
console.log(myCar.color);       //the dot notation
console.log(myCar['color']);   //the bracket notation
console.log(myCar);         //access all details of myCar
console.table(myCar);      //accessing myCar details in a table form
 
// adding data in an object(myCar) eg.owner
myCar.owner='Esther';
console.table(myCar);

// updating a detail in an object
myCar.year=2025;
console.table(myCar);

// removing an item in an object
delete myCar.engine;
console.table(myCar);


// ASSIGNMENT

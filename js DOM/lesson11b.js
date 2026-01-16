// ASYNCHRONOOUS PROGRAMMING ~ WORKS WITH PROCCESSES THAT TAKE TIME
// T IS NON-BLOCKING ~ THINGS THAT TAKE TIME CAN OCCUR IN THE BACKGROUND WHILE OTHER CODE EXECUTES

console.log("Get home");
console.log("Freshen up");
console.log("Start Cooking");

// stimulate delay(js uses setTimeout to delay)
setTimeout(()=>{
    console.log("Food is ready")
}, 5000);

console.log("Watch a movie");



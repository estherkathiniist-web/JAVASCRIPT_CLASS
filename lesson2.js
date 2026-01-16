// ARRAYS(a list of related items)
let countries=['Kenya','Uganda','Tanzania'];
console.log(countries);
console.table(countries);

// start counting from zero(0) in an array list
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
 
// adding new data in an array
countries.push('Ethiopia');
console.table(countries);

// removing data in an array, eg. removing the last country
countries.pop();
console.table(countries);

//updating an item in arrays, eg. changing uganda to south africa
countries[1]='South Africa';
console.table(countries);

// includes eg cheking if an item exists in your array
console.log(countries.includes('Dubai'));
console.log(countries.includes('Kenya'));


// an array for cars
let cars=['BMW','Toyota','Subaru','Range Rover','Bently'];
console .log(cars[0]);
console .log(cars[1]);
console .log(cars[2]);

// replacing the last item in cars
cars[1]='Land Cruiser';
console.log(cars[1]);
console.table(cars);

// adding a new car brand at the end of the array
cars.push('Mercedes');
console.table(cars);
console.log(cars);

// adding a new car at the beginning of the array
cars.unshift('Ford');
console.table(cars);
console.log(cars);

// remove the last car in the array
cars.pop();
console.table(cars);
console.log(cars);

// remove the first car in the array
cars.shift([1]);
console.table(cars);
console.log(cars);
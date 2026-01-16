//for loop=.>repeat tasks for known number of times

//display name 20 times

for (let start=0; start<=20; start++){
    console.log("kelly", start)
}


//year from 2030 to 2025

for(let year=2030; year<2025; year+=2){
    console.log("year", start)
}


//use a for loop to loop an array(list)

let products=["shoe", "shirt","belt","watches"]

 for(let product of products){
    console.log(product)
 }
  
 //list of fruits
  
 let fruits=["stawberries", "mangoes","apples"]
 for(fruit of fruits){
    console.log("the fruit is", fruit)
 }

 //loop through countries
  let countries=["kenya","somalia","uganda"]
  for(country of countries){
    console.log(countries)
  }


  //students

  let student={
    name:"Alice",
    age:23,
    course:"Computer Science",
    className:"Explorer"
}
console.log(student)
console.table(student)
console.log("student",student.name)//dot notation
console.log("age",student["age"])//bracket notation





for(let key in student){
    console.log(key,":",student[key])
}

for (let key in student){
    console.log(student[key])
}
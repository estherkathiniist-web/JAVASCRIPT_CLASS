let time=1
while(time<=6){
    console.log("watching a series",time)
    time++ //determine the loop update
}


//print out even number

let num=0

while(num<=100){
    console.log("the number is",num, "it is even")
    num+=2
}

//use a for loop and a conditional statemement to display even numbers from 1 to 100

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " - Even");
    } else {
        console.log(i + " - Odd");
    }
}

//task 2 ; use a for loop  to print  names of users who are 18 years older

const users=[
    {name:"erick",age:17},
      {name:"kelly",age:23},
        {name:"Alice",age:15},
];

// Loop through each user
for (let user= 0; user < users.length; user++) {
    if (users[user].age >= 18) {  
        console.log(users[user].name); 
    }
}
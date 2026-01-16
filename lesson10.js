// JAVASCRIPT FUNCTIONS 
// ARROW FUNCTIONS ~ it is a shorter way of writing functions ()=>

const Greet=()=>{
    console.log('Hello World!')
}
Greet()

// You pass a parameter in the ()
// e.g


const GREET=(name)=>{
    console.log('Hello', name)
}
GREET("Kelly");


// example 2
const sum=(num1, num2)=>{
    console.log(num1+num2)
}
sum(34, 67)

// CREATE A FUNCTION THAT CHECKS IF A NUMBER IS EVEN OR ODD

const EvenorOdd=(number)=>{
    if(number%2===0){
        return `The number ${number} is Even.`   // template literals ~ help combine a variable with a string, use back ticks(``)
    }else{
        return `The number ${number} is Odd.`
    }
}
console. log (EvenorOdd(27))

// example 4,RETAIL DISCOUNT ON PRODUCTS 10000 AND ABOVE
const RetailDiscount=(cost)=>{
    if (cost>=10000){
        return `Your cost is ${cost}. You have been awarded a Ksh 550 as discount.`
    }else{
        return `No discount available. Pay Ksh ${cost}`
    }
}
console.log (RetailDiscount(12500))
console.log (RetailDiscount(8000))


// CALLBACK FUNCTIONS AND ANONYMOUS FUNCTIONS

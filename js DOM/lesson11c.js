// PROMISE ~ THE RESULT OF AN ASYNCHRONOUS PROGRAM

function Mpesa(paymentResult){
    return new Promise((resolve, reject)=>{
        console.log("Enter Pin");

        // Delay for 4seconds
        setTimeout(()=>{
            if(paymentResult==="Success"){
                resolve("Confirmed, Payment made.")
            }else{
                reject("Payment failed! You have entered the wrong pin!")
            }

        }, 4000)
    })
}
Mpesa("Fail")

// Error handling
.then((message)=>{console.log(message)})  //gets output
.catch((error)=>{console.log(error)}) // incase of errors



// EXAMPLE TWO

function Jumia(productAvailability){
return new Promise((resolve, reject)=>{
        console.log("Processing availability...")

    setTimeout(()=>{
        if(productAvailability==true){
            resolve("Product available, proceed to checkout.")
        } else if(productAvailability==false){
            reject("Product out of stock!")
        }else{
            reject("Processing failed. Check your internet connection and retry!")
        }
    }, 5000)
})
}
Jumia(false)

// Error handling
.then((message)=>{console.log(message)})  //gets output
.catch((error)=>{console.log(error)}) // incase of errors


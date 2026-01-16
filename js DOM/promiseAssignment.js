// WEATHER CHECKER (STIMULATED PRPROMISE)
function getWeather(city){
return new Promise((resolve, reject)=>{
        console.log("Fetching weather update...")

    setTimeout(()=>{
        if(city==="Nairobi"){
            resolve("Sunny in Nairobi.")
        } else if(city==="Mombasa"){
            reject("Hot and humid in Mombasa!")
        }else{
            reject("Sorry, weather data not available!")
        }
    }, 5000)
})
}
getWeather("Nakuru")

// Error handling
.then((message)=>{console.log(message)})  //gets output
.catch((error)=>{console.log(error)}) // incase of errors






// QUESTION TWO
// EXAM RESULTS(RANDOM PASS/FAIL)
function checkResults(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const passed = Math.random() >= 0.5; // random true/false

      if (passed) {
        resolve(`🎉 ${student} passed the exam!`);
      } else {
        reject(`😢 ${student} failed the exam.`);
      }
    }, 2000); // 2 seconds delay
  });
}

// Test
checkResults("Esther")
  .then(result => console.log(result))
  .catch(error => console.log(error));




//   QUESTION 3
// MOVIE TICKETS BOOKING
function bookTicket(movie) {
  return new Promise((resolve, reject) => {
    if (movie === "Avengers") {
      resolve("🎬 Your ticket for Avengers is confirmed.");
    } 
    else if (movie === "Batman") {
      resolve("🦇 Your ticket for Batman is confirmed.");
    } 
    else {
      reject(`❌ Sorry, tickets not available for ${movie}.`);
    }
  });
}

// Test
bookTicket("Avengers")
  .then(message => console.log(message))
  .catch(error => console.log(error));

bookTicket("Batman")
  .then(message => console.log(message))
  .catch(error => console.log(error));

bookTicket("Titanic")
  .then(message => console.log(message))
  .catch(error => console.log(error));



























// function bookTicket(movie){
// return new Promise((resolve, reject)=>{
//         console.log("Checking movie availability...")

//     setTimeout(()=>{
//         if(movie==="Avengers"){
//             resolve("🎬Your ticket for Avengers is confirmed.")
//         } else if(movie==="Batman"){
//             reject("🦇Your ticket for Batman is confirmed!")
//         }else{
//             reject("❌Sorry, tickets not available{movie} !")
//         }
//     }, 6000)
// })
// }
// bookTicket("Batman ")

// // Error handling
// .then((message)=>{console.log(message)})  //gets output
// .catch((error)=>{console.log(error)}) // incase of errors
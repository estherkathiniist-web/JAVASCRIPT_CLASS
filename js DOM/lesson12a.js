// ASYNC AWAIT ~ CLEANER WAY TO WORK WITH PROMISES THAT GIVES A OF  A PROMISE

// MOVIE TICKETS BOOKING
function bookTicket(movie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (movie === "Avengers") {
        resolve("🎬 Your ticket for Avengers is confirmed.");
      } 
      else if (movie === "Batman") {
        resolve("🦇 Your ticket for Batman is confirmed.");
      } 
      else {
        reject(`❌ Sorry, tickets not available for ${movie}.`);
      }
    }, 5000);
  });
}

async function confirmTicket() {
  try {
    let promise = await bookTicket("Avengers");
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
}

confirmTicket();

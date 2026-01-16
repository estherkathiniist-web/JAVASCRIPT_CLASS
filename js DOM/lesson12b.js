// USING ASYNC FUNCTION TO FETCH DATA

async function fetchJokes() {
    try {
        const jokes = await fetch("https://official-joke-api.appspot.com/random_joke")
        // console.log(jokes)
        // i want the jokes only
        // solution ; convert the response to JSON(js object)
        const data = await jokes.json()
        // console.log(data)
        console.log(data.setup)
        console.log(data.punchline)
    } catch (error) {
        console.log(error)
    }
}
fetchJokes()


// FETCH ADVICE
async function advice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json(); // await this
    // console.log(data);
    console.log(data.slip.advice); // actual advice text
  } catch (error) {
    console.log(error);
  }
}

advice();

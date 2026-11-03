const jokeContainer = document.getElementById("jokeContainer");
const quoteContainer = document.getElementById("quoteContainer");


//joke
export async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  return data;
}

export async function displayJoke() {
  try {
    jokeContainer.innerHTML = "Loading joke...";
    const joke = await getJoke();

    jokeContainer.innerHTML = `
      <p>${joke.setup}</p>
      <p>${joke.punchline}</p>`;

  } catch(error) {
    jokeContainer.innerHTML = `Unable to load joke.`;
  }
}

//quote
export async function getQuote() {
  const url = "https://dummyjson.com/quotes/random";
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function displayQuote() {
  quoteContainer.innerHTML = "Loading quote...";
  const quote = await getQuote();

  quoteContainer.innerHTML = `${quote.quote}`
}
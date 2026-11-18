export async function getJoke() {
    jokeContainer.innerHTML = "loading joke...";

    //site was down when testing, maybe its up? 
    const url = "https://official-joke-api.appspot.com/random_joke";

    await fetch(url).then(fufilled =>{
        fufilled.json().then(joke =>{
            jokeContainer.innerHTML = `
            <p>${joke.setup}</p>
            <p>${joke.punchline}</p>`;
        });
    }).catch(reject => {
        jokeContainer.innerHTML = `Unable to load`;
        console.log(reject);
    });
    
}

export async function getQuote() {
    quoteContainer.innerHTML = "loading quote...";

    const url = "https://dummyjson.com/quotes/random";

    await fetch(url).then(fufilled =>{
        fufilled.json().then(quote =>{
            quoteContainer.innerHTML = `${quote.quote}`;
        });
    }).catch(reject => {
        quoteContainer.innerHTML = `Unable to load`;
        console.log(reject);
    });

}
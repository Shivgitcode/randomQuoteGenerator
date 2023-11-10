const quote = document.querySelector("#quote");
const quoteButton = document.querySelector("#newquote");
const author = document.querySelector("#author");

async function generateRandomQuote() {
  const options = {
    method: "POST",
    url: "https://quotel-quotes.p.rapidapi.com/quotes/random",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "55e66f7b3fmshd5743bf86ef0c5cp103ce2jsn5aff67a12567",
      "X-RapidAPI-Host": "quotel-quotes.p.rapidapi.com",
    },
    data: {},
  };

  try {
    const response = await axios.request(options);
    const name = await response.data.name;
    const quote = await response.data.quote;
    const arr = [name, quote];
    return arr;
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load", async () => {
  const arr = await generateRandomQuote();
  quote.innerText = `"${arr[1]}"`;
  author.innerText = arr[0];
});

quoteButton.addEventListener("click", async () => {
  const arr = await generateRandomQuote();
  quote.innerText = `"${arr[1]}"`;
  author.textContent = arr[0];
});

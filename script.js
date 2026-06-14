async function getQuote() {

    const quote = document.getElementById("quote");
    const author = document.getElementById("author");

    quote.innerText = "Loading...";
    author.innerText = "";

    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        const data = await response.json();

        quote.innerText = `"${data.quote}"`;
        author.innerText = `- ${data.author}`;

    } catch (error) {

        quote.innerText = "Failed to load quote.";
        console.error(error);
    }
}
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        getQuote();
    }
});
quote.classList.add("fade");

setTimeout(() => {
    quote.classList.remove("fade");
}, 300);
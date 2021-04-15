axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
.then(({data}) => {
    console.log(data[0]);
    const quote = data[0];
    const myHtml = `
        <article>
            <h3>${quote.character}</h3>
            <img src="${quote.image}" />
            <p>${quote.quote}</p>
        </article>
    `;
    const myDiv = document.querySelector("#simpson-quote");
    myDiv.innerHTML = myHtml;
})

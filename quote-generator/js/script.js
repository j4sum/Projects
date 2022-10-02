//import { getData } from "./fetch-wrapper.js"

const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';



let generate_quote = document.getElementsByClassName("generate_quote");
let p = document.querySelector(".p");
let = document.querySelector(".quote__author");
let rem;

function makeActive() {
    rem = Math.floor(Math.random() * 100);
    fetch(url)
        .then(response => response.json())
        .then(quotes => {
            p.innerHTML = quotes.content;

        });
}



//async function makeActive(url) {

//const data = await getData(url)
//  const quote = data.data.quotetext;
// document.querySelector(".generate-quote")
//let element = document.getElementsByClassName('lds-ring-container');
//element.classList.add("active");


//console.log(quote);


//}


}
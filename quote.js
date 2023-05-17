const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const apiURL = "http://api.quotable.io/random";
const authorEl=document.getElementById("author")




async function getQuote(){
const response =await fetch(apiURL)
const data = await response.json();
const quoteContent = data.content;
const quoteAuthor = data.author;
quoteEl.innerText=quoteContent;
authorEl.innerText= "~" + quoteAuthor;

console.log(data);
}

btnEl.addEventListener("click",getQuote);
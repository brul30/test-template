//get from lcoal quotes

// Get Quotes FROM API


//gloar variable and we use let instead of const is because we eill change the value
//only use consts if value is never changing
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');
//using API code'
let apiQuotes =[];
//show loading
// function showLoadingSpinner(){
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }
//hide loading
function removeLoadingSpinner(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}
//show new Quote
function newQuote(){
    showLoadingSpinner();
    //pick a random quote from apisQuotes ARRAY
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //console.log(quote);
    //check if author field is blank and replace it with 'unknown'
    if(!quote.author){
        authorText.textContent="unkown"
    }else{
        authorText.textContent = quote.author;
    }

    //check Quote lenght to determine the stlying
    if(quote.text.length>50){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote');
    }
    //set Quote, Hide loader

    if(!quote.Text){
        quoteText.textContent = "quote API is on progress hang tight there please";
    }else{
        quoteText.textContent = quote.text;
    }
    removeLoadingSpinner();
    getQuotes();
}

async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = 'https://zenquotes.io/api/quotes/"';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        newQuote();
        throw new Error('error');
    } catch (error) {
    }
}

//Tweet Quote
function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    //_black = open in new tab
    window.open(twitterURL, '_blank');
}
//Event Listeersn
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click', tweetQuote);




//on load
getQuotes();

/*

function newQuote(){
    const newQuote =  localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(newQuote);

}

newQuote();
*/





//code review
// make your code clear and understandable > good coder

/*
1 instead of calling loading we can do show Loading Spinner and we can remove the code aboe

2 too many if statements


*/
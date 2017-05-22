// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* create a getRandomQuote function that returns a random quote from the
 quotes array and does not return a duplicate quote until cycled through once. */
var seenQuotes = [];
var random;

function getRandomQuote() {
  var random = Math.floor(Math.random() * (quotes.length));
  var splicedQuote = quotes.splice(random, 1)[0];
    seenQuotes.push(splicedQuote);
     if (quotes.length == 0) {
       quotes = seenQuotes;
       seenQuotes = [];
    }
    return splicedQuote;
  };

// generate random color


function randomColor() {
   function rgb() {  return Math.floor(Math.random() * 255) };
   var randomColor = 'rgb(' + rgb() + "," + rgb() + "," + rgb() + ')';
   return randomColor;
 };

/*  create a function called printQuote that calls the getRandomQuote
 function prints quotes to screen. And changes background color with quotes.*/

function printQuote(  ) {
  var randomQuote = getRandomQuote();
  var html = '<p class="quote">' + randomQuote.quote + '</p>'
    + '<p class="source">' + randomQuote.source +
    '<span class="citation">' + randomQuote.citation + '</span>'
    + '<span class="year">' + randomQuote.year + '</span>' + '<span class="tags">'
    + randomQuote.tags + '</span>' + '</p>';
 document.getElementById('quote-box').innerHTML = html;
 document.body.style.background = randomColor();
 console.log(randomColor());
};

 // quotes change automaticly after a certain amount of time

setInterval(printQuote, 30000);

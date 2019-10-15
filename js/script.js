/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Step 1: build a collection of quotations
const quotes = [
  {
    quote : "It’s none of their business that you have to learn to write. Let them think you were born that way.",
    source: " Ernest Hemingway"
  },
  {
    quote : "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.",
    source: " Somerset Maugham"
  },
  {
    quote : "To produce a mighty book, you must choose a mighty theme.",
    source: " Herman Melville"
  },
  {
    quote : "It took me fifteen years to discover I had no talent for writing, but I couldn’t give it up because by that time I was too famous.",
    source: " Robert Benchley"
  },
  {
    citation : "Tell your men they work for me now, this is my city!",
    source : " The Dark Knight",
    year: 2008
  },
  {
    quote : "If you have other things in your life—family, friends, good productive day work—these can interact with your writing and the sum will be all the richer.",
    source: " David Brin"
  },
  {
    quote : "Life is what happens to you while you’re busy making other plans.",
    source: " John Lennon"
  },
  {
    quote : "The most common way people give up their power is by thinking they don’t have any.",
    source: " Alice Walker"
  },
  {
    quote : "The mind is everything. What you think you become.",
    source: " Buddha"
  },{
    citation : "Momma always said life was like a box of chocolates. You never know what you're gonna get.",
    source: " Forrest Gump",
    year: 1994
  },
  {
    quote : "The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb",
    source: " Chinese Proverb"
  },
  {
    quote : "An unexamined life is not worth living.",
    source: " Socrates"
  },
  {
    quote : "Your time is limited, so don’t waste it living someone else’s life.",
    source: " Steve Jobs"
  },
  {
    quote : "I am not a product of my circumstances. I am a product of my decisions.",
    source: " Stephen Covey"
  },
  {
    quote : "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source: " Maya Angelou"
  },
  {
    quote : "Either you run the day, or the day runs you.",
    source: " Jim Rohn"
  },
  {
    quote : "The two most important days in your life are the day you are born and the day you find out why.",
    source: " Mark Twain"
  },
  {
    quote : "Everything you’ve ever wanted is on the other side of fear.",
    source: " George Addair"
  },
  {
    quote : "Believe you can and you’re halfway there.",
    source: " Theodore Roosevelt"
  },
  {
    quote : 'Teach thy tongue to say, \"I do not know,\" and thous shalt progress.',
    source: " Maimonides"
  },
  {
    quote : "Happiness is not something readymade.  It comes from your own actions.",
    source: " Dalai Lama"
  }
]

// create getRandomQuote function
function getRandomQuote(){
  // set variable to store random number
    var randomNumber;
  // random number needs to be between array length interval
    randomNumber = Math.floor(Math.random() * quotes.length);
  // return random number
  return randomNumber;
}

function randomBgColor() {
  // source : https://stackoverflow.com/questions/1484506/random-color-generator
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    var bgColor = document.getElementById('body').style.backgroundColor = color;
    var btnColor = document.getElementById('loadQuote').style.backgroundColor = color;
    return bgColor;
} 

// create printQuote function
function printQuote() {
  // call randomBgColor
  randomBgColor()
  var storeRandomQuote = getRandomQuote(); //will the value to get the random quotes
  var html = ''; //
  ;
  // check if quote is a citation 
      // if has property year: it is a citation
        if(quotes[storeRandomQuote].year) {
          //assign quote with quote array index equivalent to the random number
          var randomQuote = '<p class="quote">' + quotes[storeRandomQuote].citation + '</p>';
          //assign source with quote array index equivalent to the random number
          var randomSource = '<p class="source">' + quotes[storeRandomQuote].source + '<span class="year">'+ quotes[storeRandomQuote].year + '</span></p>'
        } else {
          //assign quote with quote array index equivalent to the random number
          var randomQuote = '<p class="quote">' + quotes[storeRandomQuote].quote + '</p>';
          //assign source with quote array index equivalent to the random number
          var randomSource = '<p class="source">' + quotes[storeRandomQuote].source + '</p>'
        }
          // format html variable to print citation
      // else it is not citation
          // format htmlvariable to print regular quote
  document.getElementsByClassName('quote').innerHTML = quotes[getRandomQuote()].source;
  document.getElementsByClassName('source').innerHTML = quotes[getRandomQuote()].source;
  
  html += randomQuote + randomSource;
  // get the dom value of the quote-box id and set its innerHTML with html variable created earlier
  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = html;
  console.log(getRandomQuote());
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

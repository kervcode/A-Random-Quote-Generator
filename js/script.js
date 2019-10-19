/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: Kervintz Noel
******************************************/


const quotes = [
  {
    quote : "But man is not made for defeat,\" he said. \"A man can be destroyed but not defeated.",
    source: " Ernest Hemingway",
    citation: "The Old Man and the Sea",
    year: '1952'
  },
  {
    quote : "To produce a mighty book, you must choose a mighty theme.",
    source: " Herman Melville",
    citation: "Moby Dick",
    year: '1851'
  },
  {
    quote : "Tell your men they work for me now, this is my city!",
    source : " The Dark Knight",
    citation: " The Joker",
    year: '2008'
  },
  {
    quote : "The most common way people give up their power is by thinking they don’t have any.",
    source: " Alice Walker"
  },
  {
    quote : "The mind is everything. What you think you become.",
    source: " Buddha"
  },{
    quote : "Momma always said life was like a box of chocolates. You never know what you're gonna get.",
    source: " Tom Hanks",
    citation: "Forrest Gump",
    year: '1994'
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
    quote : " You may kill me with your hatefulness, But still, like air, I'll rise.",
    source: " Maya Angelou"
  },
  {
    quote : "Either you run the day, or the day runs you.",
    source: " Jim Rohn"
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
    quote : 'Teach thy tongue to say, "I do not know," and thous shalt progress.',
    source: " Maimonides"
  },
  {
    quote : "Happiness is not something readymade.  It comes from your own actions.",
    source: " Dalai Lama"
  }
]


function getRandomQuote(){
  
    var randomNumber;
  
    randomNumber = Math.floor(Math.random() * quotes.length);
  
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


function printQuote() {

  randomBgColor()
  var storeRandomQuote = getRandomQuote(); 
  var html = ''; 
      // concatenate html with quote and source - this will print for any array
          html += '<p class="quote">'+ quotes[storeRandomQuote].quote + '</p>';
      // check which property exist in the object
          // if citation and year exist
              if (quotes[storeRandomQuote].citation && quotes[storeRandomQuote].year){
                html += '<p class="source">' + 
                              quotes[storeRandomQuote].source + 
                        '<span class= "citation"> ' + 
                              quotes[storeRandomQuote].citation + 
                        '</span>' + 
                        '<span class= "year"> ' + quotes[storeRandomQuote].year + '</span></p>';
                console.log(html);
                console.log(' ');
                console.log(quotes[storeRandomQuote].citation);
              }
              // concatenate HTML with property value for citation and year
          // else if only citation
              // concatenate HTML with property value for citation
              else if (quotes[storeRandomQuote].citation) {
                html += '<p class="source">' + quotes[storeRandomQuote].source + '<span class= "citation">, ' + quotes[storeRandomQuote].citation + '</span></p>';
              } else
          // else if only year
              // concatenate HTML with property value for source
                  html += '<p class="source">' + quotes[storeRandomQuote].source + '</p>';
  // return html
  // console.log(html);
    return document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

// Step 1: build a collection of quotations
const quotations = [
  {
    quote : "It’s none of their business that you have to learn to write. Let them think you were born that way.",
    author: "– Ernest Hemingway",
    year: " "
  },
  {
    quote : "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.",
    author: "– Somerset Maugham",
    year: " "
  },
  {
    quote : "To produce a mighty book, you must choose a mighty theme.",
    author: "– Herman Melville",
    year: " "
  },
  {
    quote : "It took me fifteen years to discover I had no talent for writing, but I couldn’t give it up because by that time I was too famous.",
    author: "– Robert Benchley",
    year: " "
  },
  {
    quote : "If you have other things in your life—family, friends, good productive day work—these can interact with your writing and the sum will be all the richer.",
    author: "– David Brin",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  },
  {
    quote : " ",
    author: " ",
    year: " "
  }
]



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
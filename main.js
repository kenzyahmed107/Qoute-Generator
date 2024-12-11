var quotes = [
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
];

var quoteHolder = document.getElementById("quote");
var authorHolder = document.getElementById("author");
var generatorBtn = document.getElementById("generator");

quoteHolder.innerHTML = quotes[0].quote;
authorHolder.innerHTML = quotes[0].author;

var currentIndex = 0;
function generateCode() {
  var rondom;
  console.log(currentIndex);
  do {
    rondom = Math.floor(Math.random() * quotes.length);
  } while (currentIndex === rondom);
  currentIndex = rondom;

  console.log(currentIndex);
  quoteHolder.innerHTML = quotes[rondom].quote;
  authorHolder.innerHTML = quotes[rondom].author;
}

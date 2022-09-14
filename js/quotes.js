const quotes = [
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "You can waste your life drawing lines. Or you can live your life crossing them.",
    author: "Shonda Rhimes",
  },
  {
    quote: "To marry is to halve your rights and double your duties.",
    author: "Arthur Schopenhauer",
  },
  {
    quote: "Write injuries in dust, benefits in marble.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "What we think, we become.",
    author: "Buddha",
  },
  {
    quote: "The way get started is to quit talking and begin doing.",
    author: " Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author} -`;

function showAuthor() {
  author.classList.remove("hidden");
}
function hideAuthor() {
  author.classList.add("hidden");
}
quote.addEventListener("mouseenter", showAuthor);
quote.addEventListener("mouseleave", hideAuthor);
author.addEventListener("mouseenter", showAuthor);

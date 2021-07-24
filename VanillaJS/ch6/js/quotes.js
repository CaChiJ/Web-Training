const quotes = [
    {
        quote: "1",
        author: "일",
    },
    {
        quote: "2",
        author: "이",
    },
    {
        quote: "3",
        author: "삼",
    },
    {
        quote: "4",
        author: "사",
    },
    {
        quote: "5",
        author: "오",
    },
    {
        quote: "6",
        author: "육",
    },
    {
        quote: "7",
        author: "칠",
    },
    {
        quote: "8",
        author: "팔",
    },
    {
        quote: "9",
        author: "구",
    },
    {
        quote: "10",
        author: "십",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

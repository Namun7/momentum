const quotes = [
  {
    quote: "좋아하는 직업을 택하면 평생 하루도 일하지 않아도 될 것이니라.",
    author: "공자",
  },
  {
    quote: "자신감은 전염된다. 자신감 부족도 마찬가지다.",
    author: "빈스 롬바르디",
  },
  {
    quote:
      "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해 무엇인가 하고 있어야 한다.",
    author: "마하트마 간디",
  },
  {
    quote: "가장 적은 것으로도 만족하는 사람이 가장 부유한 사람이다.",
    author: "소크라테스",
  },
  {
    quote: "크게 실패할 용기있는 자만이 크게 이룰 수 있습니다.",
    author: "존F. 케네디",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

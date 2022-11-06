const quotes = [
  { quote: "내 이름으로 일하면 책임 전가를 못하지", author: "정주영" },
  { quote: "시련이지 실패가 아니야 ", author: "정주영" },
  {
    quote:
      "부자처럼 생각하고 부자처럼 행동해라, 나도 모르는 사이 부자가 되어 있다",
    author: "이건희",
  },
  {
    quote: "세상에 우연은 없다, 한번 맺은 인연을 소중히 하라",
    author: "이건희",
  },
  { quote: "돈의 노예로 살지 마라, 돈의 주인으로 살아라", author: "이건희" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

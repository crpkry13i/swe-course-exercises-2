// PART 1
let favNum = 9;
let baseURL = "http://numbersapi.com";

async function num1() {
  let res = await $.getJSON(`${baseURL}/${favNum}?json`);
  console.log(res);
}
num1();

let favNums = [2, 3, 6, 9, 11, 22, 42, 44];
async function num2() {
  let res = await $.getJSON(`${baseURL}/${favNums}?json`);
  console.log(res);
}
num2();

async function num3() {
  let res = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
  );
  res.forEach(data => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
num3();

// PART 2
$(function() {
  let baseURL2 = "http://deckofcardsapi.com/api/deck";

  async function part1() {
    let res = await $.getJSON(`${baseURL2}/new/draw`);
    let {suit, value} = res.cards[0];
    console.log(value, suit);
  };
  async function part2() {
    let firstCard = await $.getJSON(`${baseURL2}/new/draw`);
    let deckId = firstCard.deck_id;
    let secondCard = await $.getJSON(`${baseURL2}/${deckId}/draw`);
    [firstCard, secondCard].forEach(card => {
      let {suit, value} = card.cards[0];
      console.log(value, suit)
    });
  };
  // PART 3
  async function setup() {
  let $btn = $("button");
  let $cardArea = $("#card-area");

  let deckData = await $.getJSON(`${baseURL2}/new/shuffle/`);
    $btn.show().on('click', async function() {
      let cardData = await $.getJSON(`${baseURL2}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $("<img>", {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
          },
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  setup();
});


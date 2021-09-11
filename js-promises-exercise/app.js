// PART 1
let favNum = 9;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNum}?json`).then((res) => {
  console.log(res);
});

let favNums = [2, 3, 6, 9, 11, 22, 42, 44];
$.getJSON(`${baseURL}/${favNums}?json`).then((res) => {
  console.log(res);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNum}?json`);
  })
).then((res) => {
  res.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});

// PART 2
let baseURL2 = "http://deckofcardsapi.com/api/deck"

$.getJSON(`${baseURL2}/new/draw`).then(res => {
  console.log(res.cards[0].value, res.cards[0].suit)
});

let firstCard = null;
$.getJSON(`${baseURL2}/new/draw`).then(res => {
  firstCard = res.cards[0];
  let deckId = res.deck_id;
  return $.getJSON(`${baseURL2}/${deckId}/draw`);
}).then(res => {
  let secondCard = res.cards[0];
  [firstCard, secondCard].forEach((card) => {
    console.log(card.value, card.suit);
  });
});

// PART 3
let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

$.getJSON(`${baseURL2}/new/shuffle/`).then(res => {
  deckId = res.deck_id;
  $btn.show();
});

$btn.on('click', function() {
  $.getJSON(`${baseURL2}/${deckId}/draw/`).then(res => {
    let cardSrc = res.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardArea.append(
      $('<img>', {
        src: cardSrc,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
      })
    );
    if (res.remaining === 0) $btn.remove();
  });
});

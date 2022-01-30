const imgUrl = document.getElementById('imgurl');
const memeTopText = document.getElementById('memetoptext');
const memeBottomText = document.getElementById('memebottomtext');
const divMain = document.getElementById('main');
const button = document.querySelector("button");



button.addEventListener('click', function(e) {
    e.preventDefault();

    addMeme(imgUrl.value, memeTopText.value, memebottomtext.value);
    onclick=imgUrl.value = null;
    onclick=memeTopText.value = null;
    onclick=memeBottomText.value = null;
});

function handleRemove(e) {
  console.log(e.target.parentElement);
  e.target.parentElement.remove();
}

function addMeme(imageUrl, toptext, bottomtext) {
  let memeRow = divMain;

  // build HTML structure for new meme
  let memeWrapper = document.createElement("div");
  memeWrapper.classList.add("meme-container");
  

  let topTextSpan = document.createElement("span");
  topTextSpan.classList.add("meme-toptext");
  topTextSpan.innerText = toptext;
  memeWrapper.appendChild(topTextSpan);

  let img = document.createElement("img");
  img.src = imageUrl;
  memeWrapper.appendChild(img);

  let bottomTextSpan = document.createElement("span");
  bottomTextSpan.classList.add("meme-bottomtext");
  bottomTextSpan.innerText = bottomtext;
  memeWrapper.appendChild(bottomTextSpan);

  // append new meme to DOM
  memeWrapper.addEventListener("click", handleRemove);
  memeRow.appendChild(memeWrapper);
}





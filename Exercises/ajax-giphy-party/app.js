console.log("Let's get this party started!");

let searchInput = document.querySelector('#search');
const form = document.querySelector('form');
const div = document.querySelector('div');
let removeBtn = document.querySelector('#remove');


async function getGif(searchTerm) {
    try {
        const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: "9aRuGIpvGJ4f6Tallx58ipA1LrrqHRNT" }});
        const resData = res.data
        const dataArr = resData.data
        const randomNum = getRandom(0, dataArr.length-1)
        console.log(randomNum)
        console.log(resData)
        let img = document.createElement('img');
        img.src = dataArr[randomNum].images.original.url
        div.append(img);
    } 
    catch (e) {
        console.error(e);
    }
    
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function handleRemove() {
    console.log(div);
    div.innerHTML = "";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('SUBMIT!!!');
    getGif(searchInput.value);
})

removeBtn.addEventListener('click', handleRemove)






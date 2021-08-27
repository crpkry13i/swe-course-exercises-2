const fs = require("fs");
const process = require("process");
const axios = require("axios");
let path;
let out;

function handleOutput(text, out) {
  if (out) {
    fs.writeFile(out, text, "utf8", (err) => {
      if (err) {
        console.log("ERROR!!!", err);
        process.exit(1);
      }
    });
  } else {
    console.log(text);
  }
}

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR!!!", err);
      process.exit(1);
    }
    handleOutput(data, out);
  });
}

async function webCat(url, out) {
  try {
    let res = await axios.get(url);
    handleOutput(res.data, out);
  } catch (err) {
    console.log(`ERROR FETCHING ${url}`, err);
    process.exit(1);
  }
}

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === "http") {
  webCat(path, out);
} else {
  cat(path, out);
}
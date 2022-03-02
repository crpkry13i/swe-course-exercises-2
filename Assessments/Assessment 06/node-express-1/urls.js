const fs = require("fs");
const argv = process.argv;
const url = fs.readFileSync("urls.txt", "utf8");
const urlArr = url.split("\n");
const axios = require("axios");

process.on("exit", function (code) {
  console.log("Exiting with code:", code);
});

console.log(`GET request to ${url}`);

for (let i = 0; i < argv.length; i++) {
  if (argv[2] === "url") {
    for (let i = 0; i < urlArr.length; i++) {
      axios.get(urlArr[i]).then(async function (response) {
        const data = await response.data;
        fs.writeFileSync(`${i}.html`, data);
      });
    }
  } else if (argv[2] !== "url") {
    console.log("Please enter 'url' as a valid argument");
  }
}

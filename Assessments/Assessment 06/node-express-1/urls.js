const fs = require("fs");
const argv = process.argv;
const url = fs.readFileSync("urls.txt", "utf8");
const urlArr = url.split("\n");
const axios = require("axios");

process.on("exit", function (code) {
  console.log("Exiting with code:", code);
});

console.log(`Wrote to ${url}`);

for (let i = 0; i < argv.length; i++) {
  if (argv[2] === "url") {
    for (let i = 0; i < urlArr.length; i++) {
      axios.get(urlArr[i]).then(async function (response) {
        const data = await response.data;
        const name = urlArr[i].split("/").slice(2, 3);
        fs.writeFileSync(`${name}`, data);
      });
    }
  } else if (argv[2] !== "url") {
    console.log("Please enter 'url' as a valid argument");
  }
}

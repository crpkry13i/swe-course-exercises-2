const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

const devArr = []; // save the promises returned into an array

// async required for this function
app.post("/", async function (req, res, next) {
  try {
    // get developer promises from the url and save in array
    let results = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    await Promise.all(results) // fulfill all promises at the same time
      .then((res) =>
        res.map((dev) =>
          devArr.push({ name: dev.data.name, bio: dev.data.bio })
        )
      )
      .catch((err) => console.log(err)); // catch any errors
    return res.json(devArr); // respond with json
  } catch (err) {
    return next(err);
  }
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

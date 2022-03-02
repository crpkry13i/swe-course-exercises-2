const express = require("express");
let axios = require("axios");
var app = express();

app.post("/", async function (req, res, next) {
  try {
    let results = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    return next(err);
  }
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

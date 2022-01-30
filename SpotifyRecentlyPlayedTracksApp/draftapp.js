const express = require("express");
const request = require("request");
const app = express();
const path = require("path");
const secret = require("./secret");
const redirect_uri = "http://localhost:8888/callback";
const client_id = secret.client_id;
const client_secret = secret.client_secret;
const querystring = require("querystring");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let code = "";
let state = "abc123";
let scope =
  "user-read-private user-read-email user-read-recently-played user-top-read";

// Request User Authorization
app.get("/login", function (req, res) {
  return res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/test", function (req, res) {
  return res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

// Request Access Token
app.get("/callback", function (req, res) {
  code = req.query.code || null;
  state = req.query.state || null;

  if (state === null) {
    return res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    // AUTH OPTIONS
    authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };
  }

  // Has to be nested in "/callback" in order to work
  const req1 = request.post(authOptions, function (error, response, body) {
    access_token = body.access_token;
    refresh_token = body.refresh_token;
    console.log("ACCESS TOKEN: " + access_token);

    if (!error && response.statusCode === 200) {
      // use the access token to access User's Recently Played Tracks
      options = {
        url: "https://api.spotify.com/v1/me/player/recently-played",
        headers: { Authorization: "Bearer " + access_token },
        json: true,
      };
    } else if (error) {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "invalid_token",
          })
      );
    }
    req1.end();
  });
});

// Taken from within req1 IF Statement
// request.get(options, function (error, response, body) {
//   let items = body.items;
//   let artistName;
//   let trackName;

//   // Artist Names
//   for (let i = 0; i < items.length; i++) {
//     let artistResult = [];
//     artistName = items[i].track.artists[0].name;
//     artistResult.push(artistName);
//     console.log(artistResult);
//   }

//   // Track Names
//   for (let i = 0; i < items.length; i++) {
//     let trackResult = [];
//     trackName = items[i].track.name;
//     trackResult.push(trackName);
//     console.log(trackResult);
//   }
//   //res.render("index", { artistName: artistName, trackName: trackName });
// });

// Refresh Token
app.get("/refresh_token", function (req, res) {
  let refresh_token = req.query.refresh_token;
  authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };
  const r2 = request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let access_token = body.access_token;
      return res.send({
        access_token: access_token,
      });
    }
    r2.end();
  });
});

app.listen(8888, () => console.log("Server started on port 8888"));

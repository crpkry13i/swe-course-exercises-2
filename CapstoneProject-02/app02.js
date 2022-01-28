const express = require("express");
const request = require("request");
const app = express();
const path = require("path");
const secret = require("./secret");
const redirect_uri = "http://localhost:8888/callback";
const client_id = secret.client_id;
const client_secret = secret.client_secret;
const querystring = require("querystring");
const res = require("express/lib/response");

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

// AUTHOPTIONS
let authOptions = {
  url: "https://accounts.spotify.com/api/token",
  form: {
    code: code,
    redirect_uri: redirect_uri,
    grant_type: "authorization_code",
  },
  headers: {
    Authorization:
      "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
  },
  json: true,
};

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
    authOptions;
  }
});

const r1 = request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    let access_token = body.access_token;
    let refresh_token = body.refresh_token;
    // use the access token to access the Spotify Web API
    options = {
      url: "https://api.spotify.com/v1/me/player/recently-played",
      headers: { Authorization: "Bearer " + access_token },
      json: true,
    };
    request.get(options, function (error, response, body) {
      let items = body.items;
      let artistName;
      let trackName;

      // Artist Names
      for (let i = 0; i < items.length; i++) {
        artistName = items[i].track.artists[0].name;
        console.log(artistName);
      }
      // Track Names
      for (let i = 0; i < items.length; i++) {
        trackName = items[i].track.name;
        console.log(trackName);
      }
    });
  } else if (error) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "invalid_token",
        })
    );
  }
  res.render("index", { artistName: artistName, trackName: trackName });
});

// Refresh Token
app.get("/refresh_token", function (req, res) {
  let refresh_token = req.query.refresh_token;
  authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
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
  });
  r2.end();
});

app.listen(8888, () => console.log("Server started on port 8888"));

const express = require("express");
const app = express();
const path = require("path");
const secret = require("./secret");
const redirect_uri = "http://localhost:8888/callback";
const client_id = secret.client_id;
const client_secret = secret.client_secret;
const querystring = require("querystring");
const SpotifyWebApi = require("spotify-web-api-node");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let state = "abc123";
let scope =
  "user-read-private user-read-email user-read-recently-played user-top-read";

// credentials are optional
let spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_uri,
});

// Request User Authorization
app.get("/login", function (req, res) {
  res.redirect(
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
  spotifyApi.authorizationCodeGrant(code).then(
    function (data) {
      console.log("The token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      console.log("The refresh token is " + data.body["refresh_token"]);

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi.setRefreshToken(data.body["refresh_token"]);
      return res.redirect("/recent");
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

app.get("/recent", function (req, res) {
  if (
    spotifyApi.getAccessToken() === "" ||
    spotifyApi.getAccessToken() === undefined
  ) {
    return res.redirect("/login");
  }
  // Get Current User's Recently Played Tracks
  spotifyApi
    .getMyRecentlyPlayedTracks({
      limit: 20,
    })
    .then(
      function (data) {
        // Output items
        let items = data.body.items;
        return res.render("index", { items });
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
});

app.listen(8888, () => console.log("Server started on port 8888"));

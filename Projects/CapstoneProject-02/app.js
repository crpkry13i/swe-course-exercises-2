const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const { authenticateJWT } = require("./middleware/auth");
const path = require("path");
const secret = require("./secret");
const redirect_uri = "http://localhost:8888/callback";
const client_id = secret.client_id;
const client_secret = secret.client_secret;
const querystring = require("querystring");
const SpotifyWebApi = require("spotify-web-api-node");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authenticateJWT);

// const uRoutes = require("./routes/users");
// const aRoutes = require("./routes/auth");
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));

// 404 handler
// app.use(function (req, res, next) {
//   const err = new ExpressError("Not Found", 404);

//   // pass err to next middleware
//   return next(err);
// });

// general error handler
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;

  // set the status and alert the user
  return res.status(status).json({
    error: {
      message: err.message,
      status: status,
    },
  });
});

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

module.exports = app;

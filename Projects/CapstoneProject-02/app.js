const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const ExpressError = require("./expressError");
const path = require("path");
const { client_id, client_secret } = require("./secret");
const { redirect_uri, scope, BCRYPT_WORK_FACTOR } = require("./config");
const SpotifyWebApi = require("spotify-web-api-node");
const querystring = require("querystring");
const User = require("./models/User");
const { user } = require("pg/lib/defaults");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(flash());
// app.use(authenticateJWT);

// HTTP request logger middleware
app.use(morgan("dev"));

// flash messages middleware
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  res.locals.errors = req.flash("error");
  next();
});

// const uRoutes = require("./routes/users");
// const aRoutes = require("./routes/auth");
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));

// // 404 handler
// app.use(function (req, res, next) {
//   const err = new ExpressError("NOT FOUND", 404);
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

// credentials are optional
let spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_uri,
});

app.get("/", (req, res) => {
  return res.render("login");
});

// Request Access Token
app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
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

app.get("/register", function (req, res) {
  return res.render("register");
});

app.post("/register", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    // if no username or password, throw error
    if (!username || !password) {
      // throw new ExpressError("Missing username or password", 400);
      req.flash("error", "Missing username or password");
      res.redirect("/register");
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    // save to db
    const newUser = await User.register(username, hashedPassword);
    // return res.status(201).json({ message: `User ${newUser.username} created` });
    req.flash("success", `User ${newUser.username} created and logged in`);
    req.session.user_id = newUser._id; // set session id
    return res.redirect("/recent");
  } catch (err) {
    if (err.code === "23505") {
      next(new ExpressError("Username already exists", 400));
    }
    return next(err);
  }
});

// Request User Authorization
app.get("/login", function (req, res) {
  return res.render("login");
});

app.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.getByUsername(username); // get user by username
    const userAuth = await User.authenticate(username, password); // authenticate user input against db
    const validPassword = await bcrypt.compare(password, user.password); // compare hashed password to input

    if (!username || !password) {
      req.flash("error", "Please enter a username and password");
      return res.redirect("/login");
    } else if (userAuth && validPassword) {
      req.flash("success", `${user.username} logged in`);
      req.session.user_id = user._id; // set session id
      return res.redirect(
        // redirect to recent page
        "https://accounts.spotify.com/authorize?" +
          querystring.stringify({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: "",
          })
      );
    } else {
      req.flash("error", "Invalid username or password");
      return res.redirect("/login");
    }
  } catch (err) {
    next(err);
  }
});

app.post("/logout", function (req, res) {
  req.session.user_id = null;
  res.redirect("/login");
});

app.get("/recent", function (req, res) {
  // redirect to login if no token
  if (!req.session.user_id && !spotifyApi.getAccessToken()) {
    // flash error message if no user in session and no token then redirect to login
    req.flash("error", "You must login first");
    return res.redirect("/login");
  } else {
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
  }
});

module.exports = app;

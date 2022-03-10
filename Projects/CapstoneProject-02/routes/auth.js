// NOT BEING USED

const express = require("express");
const router = express.Router();
const ExpressError = require("../expressError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, redirect_uri, state, scope } = require("../config");
const User = require("../models/User");
const { client_id } = require("../secret");
const querystring = require("querystring");
const {
  authenticateJWT,
  ensureLoggedIn,
  requireLogin,
} = require("../middleware/auth");

router.get("/", (req, res, next) => {
  res.send("Welcome to the auth route");
});

// router.post("/register", async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     // if no username or password, throw error
//     if (!username || !password) {
//       // throw new ExpressError("Missing username or password", 400);
//       res.redirect("/register");
//     }
//     // hash password
//     const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
//     // save to db
//     const newUser = await User.register(username, hashedPassword);
//     // return res.status(201).json({ message: `User ${newUser.username} created` });
//     return res.redirect("/recent");
//   } catch (err) {
//     if (err.code === "23505") {
//       next(new ExpressError("Username already exists", 400));
//     }
//     return next(err);
//   }
// });

// router.post("/login", async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     if (!username || !password) {
//       // throw new ExpressError("Missing username or password", 400);
//       res.redirect("/login");
//     } else {
//       // authenticate user input against db
//       const user = await User.authenticate(username, password);
//       //res.json({ message: `${user.username} logged in` });
//       res.redirect(
//         "https://accounts.spotify.com/authorize?" +
//           querystring.stringify({
//             response_type: "code",
//             client_id: client_id,
//             scope: scope,
//             redirect_uri: redirect_uri,
//             state: state,
//           })
//       );
//     }
//   } catch (err) {
//     return next(err);
//   }
// });

// PRACTICE ROUTES

// router.get("/topsecret", ensureLoggedIn, (req, res, next) => {
//   try {
//     const token = req.body._token;

//     const payload = jwt.verify(token, SECRET_KEY);
//     return res.json({ message: "You have access to the top secret!" });
//   } catch (err) {
//     return next(new ExpressError("Invalid token", 401));
//   }
// });

// router.get("/private", ensureLoggedIn, (req, res, next) => {
//   try {
//     return res.json({
//       message: `You have access to the private route ${req.user.username}!`,
//     });
//   } catch (err) {
//     return next(new ExpressError("Invalid token", 401));
//   }
// });

module.exports = router;

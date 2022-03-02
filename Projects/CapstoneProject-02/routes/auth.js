const express = require("express");
const router = express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { authenticateJWT, ensureLoggedIn } = require("../middleware/auth");
const User = require("../models/User");

router.get("/", (req, res, next) => {
  res.send("APP IS WORKING!!!");
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // if no username or password, throw error
    if (!username || !password) {
      throw new ExpressError("Missing username or password", 400);
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    // save to db
    const newUser = await User.register(username, hashedPassword);
    // send back user
    return res
      .status(201)
      .json({ message: `User ${newUser.username} created` });
  } catch (err) {
    if (err.code === "23505") {
      return next(new ExpressError("Username already exists", 400));
    }
    return next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // if no username or password, throw error
    if (!username || !password) {
      throw new ExpressError("Missing username or password", 400);
    } else {
      // authenticate user
      const user = await User.authenticate(username, password);
      return res.json({ message: `${user.username} logged in` });
    }
  } catch (err) {
    return next(err);
  }
});

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

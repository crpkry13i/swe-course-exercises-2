const express = require("express");
const router = express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { ensureLoggedIn } = require("../middleware/auth");

router.get("/", (req, res, next) => {
  res.send("APP IS WORKING!!!");
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ExpressError("Missing username or password", 400);
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    // save to db
    const results = await db.query(
      `
      INSERT INTO users (username, password) 
      VALUES ($1, $2)
      RETURNING username`,
      [username, hashedPassword]
    );
    return res.json(results.rows[0]);
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
    if (!username || !password) {
      throw new ExpressError("Missing username or password", 400);
    }
    // get user from db
    const results = await db.query(
      `SELECT username, password FROM users WHERE username = $1`,
      [username]
    );
    const user = results.rows[0];
    if (user) {
      // check password
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        // create token
        const token = jwt.sign({ username }, SECRET_KEY);
        return res.json({ message: `${user.username} is logged in!`, token });
      } else {
        throw new ExpressError("Invalid username/password", 400);
      }
    } else {
      throw new ExpressError("Username not found", 400);
    }
  } catch (err) {
    return next(err);
  }
});

router.get("/topsecret", ensureLoggedIn, (req, res, next) => {
  try {
    const token = req.body._token;

    const payload = jwt.verify(token, SECRET_KEY);
    return res.json({ message: "You have access to the top secret!" });
  } catch (err) {
    return next(new ExpressError("Invalid token", 401));
  }
});

router.get("/private", ensureLoggedIn, (req, res, next) => {
  try {
    return res.json({
      message: `You have access to the private route ${req.user.username}!`,
    });
  } catch (err) {
    return next(new ExpressError("Invalid token", 401));
  }
});

module.exports = router;

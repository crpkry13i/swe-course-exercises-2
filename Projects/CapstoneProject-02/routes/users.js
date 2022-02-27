const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();
const User = require("../models/User");

// GET /users
router.get("/", async (req, res, next) => {
  try {
    let users = await User.getAll();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
});

// GET /users/:id
router.get("/:id", async (req, res, next) => {
  try {
    let user = await User.getById(req.params.id);
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});

// POST /users
router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create(username, password);
    return res.status(201).json(newUser);
  } catch (err) {
    return next(err);
  }
});

// UPDATE /users/:id
router.patch("/:id", async (req, res, next) => {
  try {
    let user = await User.getById(req.params.id);
    await User.save();
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});

// DELETE /users/:id
router.delete("/:id", async (req, res, next) => {
  try {
    let user = await User.getById(req.params.id);
    await user.delete();
    return res.json({ message: "User deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;

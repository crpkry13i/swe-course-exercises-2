/** Routes for books in bookstore. */

const express = require("express");
const router = new express.Router();

const { validate } = require("jsonschema");
const bookSchemaNew = require("../schemas/bookSchemaNew");
const bookSchemaUpdate = require("../schemas/bookSchemaUpdate");

const Book = require("../models/book");

/** GET / => {books: [book, ...]}  */

router.get("/", async function(req, res, next) {
  try {
    const books = await Book.findAll(req.query);
    return res.json({books});
  }

  catch (err) {
    return next(err);
  }
});

/** GET /[id]  => {book: book} */

 router.get("/:isbn", async function(req, res, next) {
  try {
    const book = await Book.findOne(req.params.isbn);
    return res.json({book});
  }

  catch (err) {
    return next(err);
  }
});

 /** POST /   bookData => {book: newBook}  */

router.post("/", async function(req, res, next) {
  try {
    const validation = validate(req.body, bookSchemaNew);
    if (!validation.valid) {
      return next({
        status: 400,
        error: validation.errors.map(e => e.stack)
      });
    }
    const book = await Book.create(req.body);
    return res.status(201).json({book});
  }

  catch (err) {
    return next(err);
  }
});

/** PUT /[isbn]   bookData => {book: updatedBook}  */

router.put("/:isbn", async function(req, res, next) {
  try {
    if ("isbn" in req.body) {
      return next({
        status: 400,
        message: "Not allowed"
      });
    }
    const validation = validate(req.body, bookSchemaUpdate);
    if (!validation.valid) {
      return next({
        status: 400,
        errors: validation.errors.map(e => e.stack)
      });
    }
    const book = await Book.update(req.params.isbn, req.body);
    return res.json({book});
  }

  catch (err) {
    return next(err);
  }
});

/** DELETE /[isbn]   => {message: "Book deleted"} */

router.delete("/:isbn", async function(req, res, next) {
  try {
    await Book.remove(req.params.isbn);
    return res.json({ message: "Book deleted" });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;

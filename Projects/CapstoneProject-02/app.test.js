// connect to test database -- set up in db.js
process.env.NODE_ENV = "test";

// npm packages
const request = require("supertest");

// app imports
const app = require("./app");
const db = require("./db");

describe("App", () => {
  test("Working", () => {
    expect(true).toBe(true);
  });
});

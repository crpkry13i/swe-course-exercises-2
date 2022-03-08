process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

// use smaller BCRYPT_WORK_FACTOR for faster tests
const BCRYPT_WORK_FACTOR = 1;

let testUserToken;

beforeEach(async () => {
  const hashedPassword = await bcrypt.hash("password", BCRYPT_WORK_FACTOR);
  await db.query(
    `INSERT INTO users (username, password) VALUES ('testuser', '${hashedPassword}')`
  );

  // create a test user token
  const payload = { username: "testuser" }; // payload is the user object
  testUserToken = jwt.sign(payload, SECRET_KEY);
});

// POST /register (create a new user)
describe("POST /register", () => {
  test("returns {username}", async () => {
    const response = await request(app)
      .post("/register")
      .send({ username: "testuser", password: "password" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ username: "testuser" });
  });
});

// POST /login returns JWT token
describe("POST /login", () => {
  test("returns logged in msg", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "testuser", password: "password" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({ token: expect.any(String) })
    );
  });

  test("fails with wrong password", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "testuser", password: "wrong" });
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: "Invalid username/password" });
  });
});

afterEach(async () => {
  //delete any data created by test
  await db.query(`DELETE FROM users WHERE username = 'testuser'`);
});

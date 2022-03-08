process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
const db = require("../db");

let testUser;

beforeEach(async () => {
  const result = await db.query(
    `INSERT INTO users (username, password) VALUES ('testuser', 'testpassword') RETURNING *`
  );
  testUser = result.rows[0];
});

describe("GET /users", () => {
  test("Get a list with one user", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ users: [testUser] });
  });
});

describe("GET /users/:id", () => {
  test("Gets a single user", async () => {
    const res = await request(app).get(`/users/${testUser.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ user: testUser });
  });
  test("Responds with 404 for invalid id", async () => {
    const res = await request(app).get(`/users/0`);
    expect(res.statusCode).toBe(404);
  });
});

// describe("POST /users", () => {
//   test("Creates a single user", async () => {
//     const res = await request(app)
//       .post("/users")
//       .send({ username: "guitarlover89", password: "ilovemusic" });
//     expect(res.statusCode).toBe(201);
//     expect(res.body).toEqual({
//       user: {
//         id: expect.any(Number),
//         username: "guitarlover89",
//         password: "ilovemusic",
//       },
//     });
//   });
// });

describe("PATCH /users/:id", () => {
  test("Updates a single user", async () => {
    const res = await request(app)
      .patch(`/users/${testUser.id}`)
      .send({ username: "cryptomanaic", password: "tothemoon" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      user: {
        id: testUser.id,
        username: "cryptomanaic",
        password: "tothemoon",
      },
    });
  });
  test("Responds with 404 for invalid id", async () => {
    const res = await request(app).patch(`/users/0`); // id of a non-existent user
    expect(res.statusCode).toBe(404);
  });
});

describe("DELETE /users/:id", () => {
  test("Deletes a single user", async () => {
    const res = await request(app).delete(`/users/${testUser.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "User deleted" });
  });
  test("Responds with 404 when deleting an invalid id", async () => {
    const res = await request(app).patch(`/users/0`); // id of a non-existent user
    expect(res.statusCode).toBe(404);
  });
});

afterEach(async () => {
  // delete any users created in the test
  await db.query("DELETE FROM users");
});

afterAll(async () => {
  // close db connection
  await db.end();
});

const db = require("../db");
const expressError = require("../expressError");
const bcrypt = require("bcrypt");

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
  static async getAll() {
    try {
      const results = await db.query(`SELECT * FROM users`);
      const users = results.rows.map(
        (r) => new User(r.id, r.username, r.password)
      );
      return users;
    } catch (err) {
      throw new expressError(err);
    }
  }
  static async getById(id) {
    try {
      const results = await db.query(`SELECT * FROM users WHERE id=$1`, [id]);
      if (results.rows.length === 0) {
        throw new expressError(`User with id ${id} does not exist`, 404);
      }
      const user = new User(
        results.rows[0].id,
        results.rows[0].username,
        results.rows[0].password
      );
      return user;
    } catch (err) {
      throw new expressError(err);
    }
  }
  async delete() {
    try {
      await db.query(`DELETE FROM users WHERE id=$1`, [this.id]);
    } catch (err) {
      throw new expressError(err);
    }
  }
  async save() {
    try {
      await db.query(
        `UPDATE users SET username=$1, password=$2 WHERE id=$3 RETURNING *`,
        [this.username, this.password, this.id]
      );
    } catch (err) {
      throw new expressError(err);
    }
  }
  static async authenticate(username, password) {
    try {
      const results = await db.query(`SELECT * FROM users WHERE username=$1`, [
        username,
      ]);
      if (results.rows.length === 0) {
        throw new expressError(
          `User with username ${username} does not exist`,
          404
        );
      }
      const user = new User(
        results.rows[0].id,
        results.rows[0].username,
        results.rows[0].password
      );
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new expressError("Invalid username/password", 401);
      }
      return user;
    } catch (err) {
      throw new expressError(err);
    }
  }
  static async register(newUsername, newPassword) {
    try {
      const results = await db.query(
        `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username, password`,
        [newUsername, newPassword]
      );
      const { id, username, password } = results.rows[0];
      return new User(id, username, password);
    } catch (err) {
      throw new expressError(err);
    }
  }
}

module.exports = User;

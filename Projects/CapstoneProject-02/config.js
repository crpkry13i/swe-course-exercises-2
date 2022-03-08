const SECRET_KEY = process.env.SECRET_KEY || "secret";
const redirect_uri =
  process.env.REDIRECT_URI || "http://localhost:8888/callback";

const state = "abc123";
const scope =
  "user-read-private user-read-email user-read-recently-played user-top-read";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  SECRET_KEY,
  redirect_uri,
  state,
  scope,
  BCRYPT_WORK_FACTOR,
};

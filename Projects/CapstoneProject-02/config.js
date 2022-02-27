const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};

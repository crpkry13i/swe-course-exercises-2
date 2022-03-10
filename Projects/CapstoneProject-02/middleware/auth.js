// NOT BEING USED

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");

const authenticateJWT = (req, res, next) => {
  try {
    const token = req.body._token;
    if (!token) {
      throw new ExpressError("No token provided", 400);
    }
    const payload = jwt.verify(token, SECRET_KEY);
    req.user = payload;
    return next();
  } catch (err) {
    return next();
  }
};

const ensureLoggedIn = (req, res, next) => {
  if (!req.user) {
    const e = new ExpressError("UNAUTHORIZED", 401);
    return next(e);
  }
  return next();
};

module.exports = { authenticateJWT, ensureLoggedIn };

const router = require("express").Router();

const authControllers = require("../controllers/auth");

module.exports = (db) => {
  router.post("/signup", authControllers.signup(db));
  router.post("/signin", authControllers.signin(db));
  router.post("/signout", authControllers.signout());

  return router;
};

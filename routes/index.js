const { authorizer } = require("../middlewares");

const router = require("express").Router();

module.exports = (db) => {
  router.use("/auth", require("./auth")(db));
  router.use("/users", require("./users")());
  router.use(
    "/publications",
    authorizer,
    require("../controllers/publications")(db)
  );

  return router;
};

const router = require("express").Router();
const { authorizer } = require("../../middlewares");
const allPublications = require("./all-publications");

module.exports = (db) => {
  const publications = allPublications;
  router.get("/", allPublications(db));

  const addPublication = require("./add-publication");
  router.post("/newpost", authorizer, addPublication(db));

  return router;
};

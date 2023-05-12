const router = require("express").Router();
const { authorizer } = require("../../middlewares");
const allPublications = require("./all-publications");
const addPublication = require("./add-publication");

module.exports = (db) => {
  const publications = allPublications;
  router.get("/", allPublications(db));

  const newPost = addPublication;
  router.post("/newpost", authorizer, newPost(db));

  return router;
};

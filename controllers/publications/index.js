const router = require("express").Router();
const { authorizer } = require("../../middlewares");
const allPublications = require("./all-publications");
const postById = require("./getPublication");
const addPublication = require("./add-publication");
const editedPost = require("./edit-post");
const deletePublication = require("./delete-publication");

module.exports = (db) => {
  const publications = allPublications;
  router.get("/", allPublications(db));

  const publicationById = postById;
  router.get("/:id", publicationById(db));

  const newPost = addPublication;
  router.post("/newpost", authorizer, newPost(db));

  const updatePost = editedPost;
  router.put("/updatepost/:id", authorizer, updatePost(db));

  const deleted = deletePublication;
  router.delete("/deletepost/:id", deleted(db));

  return router;
};

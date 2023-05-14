const router = require("express").Router();
const { authorizer } = require("../../middlewares");
const allPublications = require("./all-publications");
const postById = require("./getPublication");
const addPublication = require("./add-publication");
const editedPost = require("./edit-post");
const deletePublication = require("./delete-publication");
const addComment = require("./add-comment");
const selecComments = require("./getComments");
const selectOneComment = require("./getOne-comment");
const deletingComment = require("./delete-comment");

module.exports = (db) => {
  const publications = allPublications;
  router.get("/", allPublications(db));

  const publicationById = postById;
  router.get("/:id", publicationById(db));

  const commentsByPost = selecComments;
  router.get("/:publication_id/comments", commentsByPost(db));

  const commentByPost = selectOneComment;
  router.get("/:publication_id/comments/:id", commentByPost(db));

  const newPost = addPublication;
  router.post("/newpost", authorizer, newPost(db));

  const newComment = addComment;
  router.post("/:publication_id/newcomment", newComment(db));

  const updatePost = editedPost;
  router.put("/updatepost/:id", authorizer, updatePost(db));

  const deleted = deletePublication;
  router.delete("/deletepost/:id", deleted(db));

  const deletedComment = deletingComment;
  router.delete("/:publication_id/deletecomment/:id", deletedComment(db));

  return router;
};

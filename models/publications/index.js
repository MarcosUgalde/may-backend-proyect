const newPublication = require("./new-post");
const getAllPublications = require("./getallpublic");
const getPublication = require("./get-post-by-title");
const editPost = require("./edit-publication");
const deletePost = require("./delete-publication");
const addComment = require("./comment-post");
const getComments = require("./get-comments");
const getOneComment = require("./get-one-comment");
const editComment = require("./edit-comment");
const deleteComment = require("./delete-comment");

module.exports = db = {
  getAllPublications,
  getPublication,
  newPublication,
  editPost,
  deletePost,
  addComment,
  getComments,
  getOneComment,
  editComment,
  deleteComment,
};

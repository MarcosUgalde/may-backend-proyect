const newPublication = require("./new-post");
const getAllPublications = require("./getallpublic");
const getPublication = require("./get-post-by-title");
const editPost = require("./edit-publication");

module.exports = db = {
  getAllPublications,
  getPublication,
  newPublication,
  editPost,
};

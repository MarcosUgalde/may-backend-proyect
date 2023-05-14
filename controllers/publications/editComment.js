const errors = require("../../misc/errors");
const { editComment } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const { newComment, id } = req.body;

  const editedComment = await editComment(await db)(newComment, req.params.id);

  if (!editedComment.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: editedComment.data,
  });
};

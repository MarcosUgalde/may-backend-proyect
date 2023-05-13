const errors = require("../../misc/errors");
const { addComment } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const { response } = req.body;
  const { publication_id } = req.params;
  const comment = await addComment(await db)(response, publication_id);

  if (!comment.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: comment.data,
  });
};

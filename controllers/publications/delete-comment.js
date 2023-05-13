const errors = require("../../misc/errors");
const { deleteComment } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const result = await deleteComment(await db)(id);

  if (!result.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    message: "comment deleted",
  });
};

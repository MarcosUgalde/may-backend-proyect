const errors = require("../../misc/errors");
const { getOneComment } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const oneComment = await getOneComment(await db)(req.params.id);

  if (!oneComment.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: oneComment.data,
  });
};

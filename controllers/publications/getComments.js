const errors = require("../../misc/errors");
const { getComments } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const { publication_id } = req.params;
  const comments = await getComments(await db)(publication_id);

  if (!comments.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: comments.data,
  });
};

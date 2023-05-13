const errors = require("../../misc/errors");
const { editPost } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const publication = await editPost(await db)(req.body);

  if (!publication.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: publication.data,
  });
};

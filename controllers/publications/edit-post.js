const errors = require("../../misc/errors");
const { editPost } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const { newTitle, newText_body } = req.body;
  const publication = await editPost(await db)(
    newTitle,
    newText_body,
    req.params.id
  );

  if (!publication.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: publication.data,
  });
};

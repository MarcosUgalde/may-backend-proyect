const errors = require("../../misc/errors");
const { getPublication } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const publication = await getPublication(await db)(req.params.id);

  if (!publication.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: publication.data,
  });
};

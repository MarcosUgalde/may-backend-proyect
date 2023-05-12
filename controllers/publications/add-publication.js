const errors = require("../../misc/errors");
const { newPublication } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const publication = await newPublication(await db)(req.body);

  if (!publication.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: publication.data,
  });
};

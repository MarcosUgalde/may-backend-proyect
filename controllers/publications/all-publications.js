const errors = require("../../misc/errors");
const { getAllPublications } = require("../../models/publications");

module.exports = (db) => async (req, res, next) => {
  const result = await getAllPublications(await db)();

  if (!result.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: result.data,
  });
};

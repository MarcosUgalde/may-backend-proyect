const { sql } = require("slonik");

module.exports = (db) => async (newComment, commentId) => {
  try {
    await db.query(sql.unsafe`
        UPDATE comments
        SET response = ${newComment}
        WHERE id = ${commentId}
    `);

    return {
      ok: true,
      data: { response: newComment },
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

const { sql } = require("slonik");

module.exports = (db) => async (commentId) => {
  try {
    const result = await db.query(sql.unsafe`
        SELECT publication.title, comments.response
        FROM publication
        INNER JOIN comments
        ON publication.id = comments.publication_id
        WHERE comments.id = ${commentId}
        `);

    return {
      ok: true,
      data: result.rows,
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

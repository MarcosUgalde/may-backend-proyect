const { sql } = require("slonik");

module.exports = (db) => async (postId) => {
  try {
    const result = await db.query(sql.unsafe`
            SELECT publication.title, publication.text_body, comments.response
            FROM publication
            INNER JOIN comments
            ON publication.id = comments.publication_id
            WHERE publication.id = ${postId}
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

const { sql } = require("slonik");
const { v4: uuidv4 } = require("uuid");

module.exports = (db) => async (response, publication_id) => {
  try {
    const comment_id = uuidv4();
    await db.query(sql.unsafe`
            INSERT INTO comments (
                id, response, publication_id
            ) VALUES (
                ${comment_id}, ${response}, ${publication_id}
            )
        `);

    return {
      ok: true,
      message: "comment posted",
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

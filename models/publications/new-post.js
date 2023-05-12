const { sql } = require("slonik");
const { v4: uuidv4 } = require("uuid");

module.exports = (db) => async (info) => {
  try {
    const newPostId = uuidv4();

    await db.query(sql.unsafe`
            INSERT INTO publication (
                id, title, text_body
            ) VALUES (
                ${newPostId}, ${info.title}, ${info.text_body}
            )
        `);

    return {
      ok: true,
      data: info,
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

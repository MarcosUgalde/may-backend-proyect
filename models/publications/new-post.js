const { sql } = require("slonik");

module.exports = (db) => async (head, body) => {
  try {
    await db.query(sql.unsafe`
            INSERT INTO publications (
                title, text_body
            ) VALUES (
                ${head}, ${body}
            )
        `);

    return {
      ok: true,
      data: postInfo,
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

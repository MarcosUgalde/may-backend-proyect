const { sql } = require("slonik");

module.exports = (db) => async (newTitle, newText_body, id) => {
  try {
    await db.query(sql.unsafe`
        UPDATE publication
        SET title = CASE
            WHEN ${newTitle !== undefined && newTitle !== null} THEN ${newTitle}
                ELSE title 
            END, 
  text_body = CASE 
                WHEN ${
                  newText_body !== undefined && newText_body !== null
                } THEN ${newText_body}
                ELSE text_body 
              END
            WHERE id = ${id}
    `);

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

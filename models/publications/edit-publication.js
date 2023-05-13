const { sql } = require("slonik");

module.exports = (db) => async (newTitle, newText_body) => {
  try {
    await db.query(sql.unsafe`
        UPDATE publication
        SET title = CASE
            WHEN ${newTitle} IS NOT NULL THEN ${newTitle}
                ELSE title 
            END, 
  text_body = CASE 
                WHEN ${newText_body} IS NOT NULL THEN ${newText_body}
                ELSE text_body 
              END
            
    `);
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

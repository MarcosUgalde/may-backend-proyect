const { sql } = require("slonik");

module.exports = (db) => async (id) => {
  try {
    await db.query(sql.unsafe`
            DELETE FROM comments 
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

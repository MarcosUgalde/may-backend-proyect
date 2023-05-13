const { sql } = require("slonik");

module.exports = (db) => async (id) => {
  try {
    await db.query(sql.unsafe`
        DELETE FROM publication
        WHERE id = ${id}
    `);

    return {
      ok: true,
      message: "publication deleted",
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
    };
  }
};

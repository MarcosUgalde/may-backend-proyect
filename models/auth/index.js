const { insertUser } = require("./queries");

const createUser = (db) => async (username, password) => {
  try {
    await db.query(insertUser(username, password));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("> create user error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createUser,
};

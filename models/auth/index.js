const { insertUser } = require("./queries");
const { selectByUsername } = require("./queries");

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

const selectUser = (db) => async (username, compareFn) => {
  try {
    const user = await db.maybeOne(selectByUsername(username));

    if (!user)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    const areEqual = await compareFn(user.password);

    console.info("¿Son iguales? ", areEqual);
    if (!areEqual)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    return {
      ok: true,
      content: {
        username: user.username,
      },
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
  selectUser,
};

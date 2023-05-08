const { sql } = require("slonik");

const insertUser = (username, password) => sql.unsafe`
    INSERT INTO users (
        username, password
    ) VALUES (
        ${username}, ${password}
    );
`;

module.exports = {
  insertUser,
};

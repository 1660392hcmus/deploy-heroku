const kenx = require("knex");

const db = kenx({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "12345",
      database: "1660392-db"
    }
  });

module.exports = db;
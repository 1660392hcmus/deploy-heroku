const kenx = require("knex");

const db = kenx({
    client: "pg",
    connection: process.env.HEROKU_POSTGRESQL_NAVY_URL || {
      host: "localhost",
      port: "5432",
      user: "postgres",
      password: "12345",
      database: "1660392-db",
      ssl: false
    }
  });

module.exports = db;
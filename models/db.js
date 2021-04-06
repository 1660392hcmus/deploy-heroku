const kenx = require("knex");

const db = kenx({
    client: "pg",
    connection: process.env.HEROKU_POSTGRESQL_NAVY_URL || 'postgres://postgres:12345@localhost:5432/1660392-db',
    ssl: true,
  });

module.exports = db;
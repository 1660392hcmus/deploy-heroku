const kenx = require("knex");

const db = kenx({
    client: "pg",
    connection: process.env.DATABASE_URL || 'postgres://postgres:12345@localhost:5432/1660392-db',
  });

module.exports = db;
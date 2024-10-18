const { Pool } = require("pg");
const {
    DB_HOST,
    DB_USER,
    DB_PORT,
    DB_DATABASE,
    DB_PASSWORD,
    DB_NAME,
} = require("../config");

module.exports = new Pool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
});

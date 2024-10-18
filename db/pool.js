const { Pool } = require("pg");
const {
    DB_HOST,
    DB_USER,
    DB_PORT,
    DB_DATABASE,
    DB_PASSWORD,
} = require("../config");
require("dotenv").config();

module.exports = new Pool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
});

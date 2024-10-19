const { Pool } = require("pg");
const {
    DB_HOST,
    DB_USER,
    DB_PORT,
    DB_DATABASE,
    DB_PASSWORD,
    DB_NAME,
    CONNECTION_STRING,
} = require("../config");

const connectionString = CONNECTION_STRING;

module.exports = new Pool({
    connectionString,
    DB_PASSWORD,
});

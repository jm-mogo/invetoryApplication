const PORT = process.env.PORT || 8800;
const HOST = process.env.HOST || "0.0.0.0";

require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

module.exports = {
    PORT,
    DB_HOST,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    DB_DATABASE,
    HOST,
    CONNECTION_STRING,
};

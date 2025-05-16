const mysql = require("sequilize");

const dbConnection = mysql.createConnection({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
})

exports.ç
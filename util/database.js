const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "dzonylol1",
});

module.exports = pool.promise();

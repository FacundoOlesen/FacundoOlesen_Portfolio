const mysql = require('mysql2/promise');

require('dotenv').config();

const con = mysql.createPool({
  user:process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database:process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})


  
module.exports = con;
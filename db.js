const mysql = require('mysql');

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  port            : 3306,
  user            : 'root',
  password        : '',
  database        : 'audio_player'
});

pool.getConnection((err, connection) => {
  if (err) throw err; 
  console.log("Database connection : ",connection.state);
});

exports.pool = pool;

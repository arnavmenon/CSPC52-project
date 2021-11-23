const mysql = require('mysql2');

config =  {
    host     : 'localhost',
    user     : process.env.userName,
    password : process.env.dbPass,
    database : process.env.dbName,
    multipleStatements: true
  };

const db = mysql.createConnection(config);

db.connect((err) =>{
    if(err){
        throw(err)
    }
    console.log("Connected to MySQL");
});

module.exports = db;
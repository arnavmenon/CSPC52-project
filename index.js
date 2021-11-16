require('dotenv').config({ path: './src/env/.env' });

const cors = require('cors');
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.APP_PORT;

const db =  mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : process.env.dbPass,
    database : 'test'
  });


db.connect((err) =>{
    if(err){
        throw(err)
    }

    console.log("Connected to MySQL");
});

//app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

app.get("/showAll", (req,res) =>{
    let SQL="SELECT * FROM persons";
    let query=db.query(SQL, (err, rows)=>{
        if(err) throw err;
        console.log(rows);
        res.send(rows);
    });
});

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})


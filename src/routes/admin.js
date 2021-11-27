const express = require('express');
const router = express.Router();
const config = require("../db/config");
const db=config;

router.get("/showAll", (req,res) =>{
    let SQL="SELECT * FROM persons";
    let query=db.query(SQL, (err, rows)=>{
        if(err) throw err;
        console.log(rows);
        res.send(rows);
    });
});

router.post("/addPerson", (req,res) =>{
    let {fn,ln,age,city}=req.body;      //set id to auto increment so neednt accept in request
    console.log(req.body);
    let SQL=`insert into persons (LastName, FirstName, Age, City) values ("${ln}","${fn}",${age},"${city}")`; 
    let query=db.query(SQL, (err, rows)=>{
        if(err) throw err;
        console.log(rows);
        res.send(rows);
    });
    //res.send(rows);
});

module.exports = router;
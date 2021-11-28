require('dotenv').config({ path: '../env/.env' });
const db= require('./config.js');
const path = require('path');
const fs = require('fs');

db.connect();
console.log("Seeding database...")
const seedData = fs.readFileSync(path.join(__dirname, 'data.sql')).toString();

console.log(seedData);

let query = () => { 
    let temp= db.query(seedData, (err, rows)=>{
    if(err) throw err;
    console.log(rows);
    res.send("Done");
  });
}

query();

console.log("Seed completed successfully");

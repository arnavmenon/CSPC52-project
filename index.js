require('dotenv').config({ path: './src/env/.env' });

const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.APP_PORT;

//app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/auth', require('./src/routes/admin'));


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})


module.exports = app => {

    const express = require('express');
    const router = express.Router();
    const config = require("../db/config");
    const db=config;
    const session = require('express-session');

    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));

    router.post("/register", (req, res) => {
        let {username, password} = req.body;
        console.log(req.body);
        let insert_query = `insert into ACCOUNTS (username, password) values ("${username}", "${password}")`;
        db.query(insert_query, (err, rows) => {
            if(err)
                throw err;
            console.log(rows);
            res.send(rows);
        });
    });

    router.post("/auth", (req, res) => {
        let {username, password} = req.body;
        if(username && password)
        {
            let check_query = `select * from ACCOUNTS where username = ? and password = ?`;
            db.query(check_query, [username, password], (err, rows) => {
                if(rows.length > 0)
                {
                    req.session.loggedin = true;
                    req.session.username = username;
                    //res.redirect('/home');
                }
                else
                {
                    res.send('Invalid Credentials!!').status(401)
                }
                res.end();
            });
        }
        else
        {
            res.send('Please enter Username and Password!');
		    res.end();
        }
    });

    router.get("/view", (req, res) => {
        if(req.session.loggedin)
            res.send('Welcome back, ' + req.session.username + '!');
        else
            res.send('Login as Admin User!!');
        res.end();
    });

    app.use('/admin', router);
};
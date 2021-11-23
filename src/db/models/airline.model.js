const sql = require('../config.js')

//constructor for Airline Object
const Airline = function(airline) {
    this.id = airline.id;
    this.al_name = airline.al_name;
    this.code = airline.code;
};

//create new airline record
Airline.create = (newAirline, result) => {
    sql.query('insert into AIRLINE (id, al_name, code) values (?, ?, ?)', [newAirline.id, newAirline.al_name, newAirline.code], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("new airline: ", {...newAirline});
        result(null, {...newAirline});
    });
};

//get all airlines
Airline.getAll = (result) => {
    sql.query('select * from AIRLINE', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log('airlines: ', res);
        result(null, res);
    });
};

//get airline by ID
Airline.getByID = (id, result) => {
    sql.query(`select * from AIRLINE where id = '${id}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found airline: ', res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: 'not_found' }, null);
    });
};

//update airline by id
Airline.updateByID = (id, airline, result) => {
    sql.query(`update AIRLINE set al_name = '${airline.al_name}', code = '${airline.code}' where id = '${airline.id}'`, (err, res) => {      
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found airline with the id
            result({ kind: 'not_found' }, null);
            return;
        }
        console.log('updated airline: ', {...airline});
    });
};

//delete airline by id
Airline.remove = (id, result) => {
    sql.query(`delete from AIRLINE where id = '${id}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found airline with the id
            result({ kind: 'not_found' }, null);
            return;
        }
        console.log('deleted airline with id: ', id);
    });
};

Airline.removeAll = (result) => {
    sql.query('delete from AIRLINE', (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(null, err);
            result;
        }
        console.log(`deleted ${res.affectedRows} airlines`);
        result(null, res);
    });
};

module.exports = Airline;

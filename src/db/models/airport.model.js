const sql = require('../config.js');

//constructor for Airport Object
const Airport = function(airport) {
    this.id = airport.id;
    this.ap_name = airport.ap_name;
    this.state = airport.state;
    this.city = airport.city;
    this.country = airport.country;
};

//create new airport record
Airport.create = (newAirport, result) => {
    sql.query('insert into AIRPORT (id, ap_name, state, country, city) values (?, ?, ?, ?, ?)', [newAirport.id, newAirport.ap_name, newAirport.state, newAirport.country, newAirport.city], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("new airport: ", {...newAirport});
        result(null, {...newAirport});
    });
};

//get all airports
Airport.getAll = (result) => {
    sql.query('select * from AIRPORT', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log('airports: ', res);
        result(null, res);
    });
};

//get airport by ID
Airport.getByID = (id, result) => {
    sql.query(`select * from AIRPORT where id = '${id}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found airport: ', res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: 'not_found' }, null);
    });
};

//update airport by id
Airport.updateByID = (id, airport, result) => {
    sql.query(`update AIRPORT set ap_name = '${airport.ap_name}', state = '${airport.state}', city = '${airport.city}', country = '${airport.country}' where id = '${airport.id}'`, (err, res) => {      
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found airport with the id
            result({ kind: 'not_found' }, null);
            return;
        }
        console.log('updated airport: ', {...airport});
    });
};

//delete airport by id
Airport.remove = (id, result) => {
    sql.query(`delete from AIRPORT where id = '${id}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found airport with the id
            result({ kind: 'not_found' }, null);
            return;
        }
        console.log('deleted airport with id: ', id);
    });
};

Airport.removeAll = (result) => {
    sql.query('delete from AIRPORT', (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(null, err);
            result;
        }
        console.log(`deleted ${res.affectedRows} airports`);
        result(null, res);
    });
};

module.exports = Airport;
const { threadId } = require('../config.js');
const sql = require('../config.js');

const Flight = function(flight)
{
    this.flight_code = flight.flight_code;
    this.src = flight.src;
    this.dest = flight.dest;
    this.start_time = flight.start_time;
    this.end_time = flight.end_time;
    this.status = flight.status;
    this.flight_type = flight.flight_type;
    this.duration = flight.duration;
    this.airline_id = flight.airline_id;
};

//create new flight record
Flight.create = (newFlight, result) => {
    sql.query('insert into FLIGHT (flight_code, source, destination, start_time, end_time, status, flight_type, duration, airline_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [newFlight.flight_code, newFlight.src, newFlight.dest, 
        newFlight.start_time, newFlight.end_time,newFlight.status,
        newFlight.flight_type, newFlight.duration, newFlight.airline_id], (err, res) => {
        
            if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
            }
            
            console.log("new flight: ", {...newFlight});
            result(null, {...newFlight});
    });
};

//get all Flights
Flight.getAll = (result) => {
    sql.query('select * from FLIGHT', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log('flights: ', res);
        result(null, res);
    });
};

//get flight with flight code
Flight.getByFlightCode = (_flight_code, result) => {
    sql.query(`select * from FLIGHT where flight_code = '${_flight_code}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found flight: ', res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: 'not_found' }, null);
    });
};

//get Flight with src
Flight.getBySrc = (_src, result) => {
    sql.query(`select * from FLIGHT where source = '${_src}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found flights: ', res);
            result(null, res);
            return;
        }
        result({kind: 'not_found' }, null);
    });
};

//get Flight by dest
Flight.getByDest = (_dest, result) => {
    sql.query(`select * from FLIGHT where destination = '${_dest}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found flights: ', res);
            result(null, res);
            return;
        }
        result({kind: 'not_found' }, null);
    });
};

//get Flight by Airline ID
Flight.getByAirlineID = (_airline_id, result) => {
    sql.query(`select * from FLIGHT where airline_id = '${_airline_id}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found flights: ', res);
            result(null, res);
            return;
        }
        result({kind: 'not_found' }, null);
    });
};

//update Flight with Flight Code
Flight.update = (_flight_code, _flight, result) => {
    sql.query(`update FLIGHT set source = '${_flight.src}', destination = '${_flight.dest}', start_time = '${_flight.start_time}', end_time = '${_flight.end_time}', status = '${_flight.status}', flight_type = '${_flight.flight_type}',
    duration = '${_flight.duration}', airline_id = '${_flight.airline_id}' 
    where flight_code = '${_flight.flight_code}'`, (err, res) => {      
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found flight with flight code
            result({ kind: 'not_found' }, null);
            return;
        }
        console.log('updated flight: ', {..._flight});
    });
}


//delete Flight with Flight Code
Flight.remove = (_flight_code, result) => {
    sql.query(`delete from FLIGHT where flight_code = '${_flight_code}'`, (err, res) => {
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
        console.log('deleted flight with flight_code: ', _flight_code);
    });
};


//delete all Flights
Flight.removeAll = (result) => {
    sql.query('delete from FLIGHT', (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(null, err);
            result;
        }
        console.log(`deleted ${res.affectedRows} flights`);
        result(null, res);
    });
};

module.exports = Flight;
module.exports = app => {

    const Flight = require('../controllers/flight.controller.js');
    var router = require('express').Router();
    var router_fetch_flightCode = require('express').Router();
    var router_fetch_src = require('express').Router();
    var router_fetch_dest = require('express').Router();
    var router_fetch_airline_id = require('express').Router();

    //create a new Flight record
    router.post('/', Flight.create);

    //fetch all flight records
    router.get('/', Flight.getAll);

    //get flight by flight code
    router.get('/select/code/:flight_code', Flight.getByFlightCode);

    //get flight by src
    router.get('/select/src/:src', Flight.getBySrc);

    //get flight by dest
    router.get('/select/dest/:dest', Flight.getByDest);

    //get flight by Airline ID
    router.get('/select/airline_id/:airline_id', Flight.getByAirlineID);

    //update flight by flight code
    router.put('/:flight_code', Flight.updateByFlightCode);

    //delete all Flights
    router.delete('/', Flight.removeAll);

    //delete a Flight with flight_code
    router.delete('/:flight_code', Flight.remove);

    //check this line
    app.use('/api/flight', router);
};
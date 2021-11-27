const Flight = require('../db/models/flight.model.js');

// Create and Save a new Flight
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
    res.status(400).send
        ({
            message: 'Content can not be empty!'
        });
    }

    const flight = new Flight(
        {
            flight_code : req.body.flight_code,
            src : req.body.src,
            dest : req.body.dest, 
            start_time : req.body.start_time,
            end_time : req.body.end_time,
            status : req.body.status,
            flight_type : req.body.flight_type, 
            duration : req.body.duration, 
            airline_id : req.body.airline_id
        });
    
    Flight.create(flight, (err, data) => {
        if(err)
        {
            res.status(500).send
                ({
                    message : err.message || 'Error during creation of Flight Object'
                });
        }
        else res.send(data);
    });
};

// Retrieve all Flights from the database.
exports.getAll = (req, res) => {
    Flight.getAll((err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving flights.'
        });
      else res.send(data);
    });
};

//Retrieve Flight from flight code
exports.getByFlightCode = (req, res) => {
    const flight_code = req.params.flight_code;
    Flight.getByFlightCode(flight_code, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Flight with flight code ${flight_code}.`
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Flight with flight code ${flight_code}`
              });
            }
          } else res.send(data);
    });
};

//Retrieve Flight from src
exports.getBySrc = (req, res) => {
    const src = req.params.src;
    Flight.getBySrc(src, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Flight with src ${src}.`
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Flight with src ${src}`
              });
            }
          } else res.send(data);
    });
};


//Retrieve Flight from dest
exports.getByDest = (req, res) => {
    const dest = req.params.dest;
    Flight.getByDest(dest, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Flight with dest ${dest}.`
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Flight with dest ${dest}`
              });
            }
          } else res.send(data);
    });
};


//Retrieve Flight from airline_id
exports.getByAirlineID = (req, res) => {
    const airline_id = req.params.airline_id;
    Flight.getByAirlineID(airline_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Flight with airline_id ${airline_id}.`
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Flight with airline_id ${airline_id}`
              });
            }
          } else res.send(data);
    });
};

//Update Flight with flight code
exports.updateByFlightCode = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body);
    Flight.update(
        req.params.flight_code,
        new Flight(req.body),
        (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found Flight with flight code ${req.params.flight_code}.`
            });
            } else {
            res.status(500).send({
                message: "Error updating Flight with flight code " + req.params.flight_code
            });
            }
        } else res.send(data);
        }
    );
};

//Delete Flight with flight_code
exports.remove = (req, res) => {
    Flight.remove(req.params.flight_code, (err, data) => {
        if(err)
        {
            if(err.kind === 'not_found') {
                res.status(404).send
                ({
                    message: `No Flight with ${req.params.flight_code} exists`
                });
            }
            else
            {
                res.status(500).send
                ({
                    message: `Could not delete Flight with Flight Code ${req.params.flight_code}`
                });
            }
        }
        else
            res.send({
                message: `Flight with Flight Code ${req.params.flight_code} successfully removed`
            })
    });
};


//Delete all Flights 
exports.removeAll = (req, res) => {
    Flight.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all flights."
          });
        else res.send({ message: `All flights were deleted successfully!` });
    });
};

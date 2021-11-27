const Airline = require("../db/models/airline.model.js");

// Create and Save a new Airline
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
    res.status(400).send
        ({
            message: 'Content can not be empty!'
        });
    }

    const airline = new Airline(
        {
            id : req.body.id,
            al_name : req.body.al_name,
            code : req.body.code
        });
    
    Airline.create(airline, (err, data) => {
        if(err)
        {
            res.status(500).send
                ({
                    message : err.message || 'Error during creation of Airline Object'
                });
        }
        else res.send(data);
    });
};

// Retrieve all Airlines from the database (with condition).
exports.getAll = (req, res) => {
    Airline.getAll((err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving airlines.'
        });
      else res.send(data);
    });
};

// Find a single Airline with a id
exports.getByID = (req, res) => {
    const id = req.params.id;
    Airline.getByID(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Airline with id ${id}.`
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Airline with id ${id}`
              });
            }
          } else res.send(data);
    });
};

// Update a Airline identified by the id in the request
exports.updateByID = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body);
    Airline.updateByID(
        req.params.id,
        new Airline(req.body),
        (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found Airline with id ${req.params.id}.`
            });
            } else {
            res.status(500).send({
                message: "Error updating Airline with ID " + req.params.id
            });
            }
        } else res.send(data);
        }
    );
};

// Delete a Airline with the specified id in the request
exports.remove = (req, res) => {

    Airline.remove(req.params.id, (err, data) => {
        if(err)
        {
            if(err.kind === 'not_found') {
                res.status(404).send
                ({
                    message: `No Airport with ${req.params.id} exists`
                });
            }
            else
            {
                res.status(500).send
                ({
                    message: `Could not delete Airline with ID ${req.params.id}`
                });
            }
        }
        else
            res.send({
                message: `Airline with ID ${req.params.id} successfully removed`
            })
    });
};

// Delete all Airlines from the database.
exports.removeAll = (req, res) => {
    Airline.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all flights."
          });
        else res.send({ message: `All Airlines were deleted successfully!` });
    });
};

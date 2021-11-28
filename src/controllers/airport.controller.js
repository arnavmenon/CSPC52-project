const Airport = require("../db/models/airport.model.js");

// Create and Save a new Airport
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
    res.status(400).send
        ({
            message: 'Content can not be empty!'
        });
    }

    const aiport = new Airport(
        {
            id : req.body.id,
            ap_name : req.body.ap_name,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country
        });
    
    Airport.create(aiport, (err, data) => {
        if(err)
        {
            res.status(500).send
                ({
                    message : err.message || 'Error during creation of Airport Object'
                });
        }
        else res.send(data);
    });
};

// Retrieve all Airports from the database (with condition).
exports.getAll = (req, res) => {
    Airport.getAll((err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving aiports.'
        });
      else res.send(data);
    });
};

// Find a single Airport with a id
exports.getByID = (req, res) => {
    const id = req.params.id;
    Airport.getByID(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Airport with id ${id}.`
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Airport with id ${id}`
              });
            }
          } else res.send(data);
    });
};

// Update a Airport identified by the id in the request
exports.updateByID = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body);
    Airport.updateByID(
        req.params.id,
        new Airport(req.body),
        (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found Airport with id ${req.params.id}.`
            });
            } else {
            res.status(500).send({
                message: "Error updating Airport with ID " + req.params.id
            });
            }
        } else res.send(data);
        }
    );
};

// Delete a Airport with the specified id in the request
exports.remove = (req, res) => {

    Airport.remove(req.params.id, (err, data) => {
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
                    message: `Could not delete Airport with ID ${req.params.id}`
                });
            }
        }
        else
            res.send({
                message: `Airport with ID ${req.params.id} successfully removed`
            })
    });
};

// Delete all Airports from the database.
exports.removeAll = (req, res) => {
    Airport.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all flights."
          });
        else res.send({ message: `All Airports were deleted successfully!` });
    });
};

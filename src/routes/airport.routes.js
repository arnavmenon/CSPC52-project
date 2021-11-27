module.exports = app => {

    const Airport = require('../controllers/airport.controller.js');
    var router = require('express').Router();

    //create a new Airline record
    router.post('/', Airport.create);

    //fetch all airline records
    router.get('/', Airport.getAll);

    //get airport by ID
    router.get('/:id', Airport.getByID);

    //update airline by ID
    router.put('/:id', Airport.updateByID);

    //delete airlines 
    router.delete('/', Airport.removeAll);

    //delete an airline by id
    router.delete('/:id', Airport.remove);

    //check this line
    app.use('/api/airport', router);
};
module.exports = app => {

    const Airline = require('../controllers/airline.controller.js');
    var router = require('express').Router();

    //create a new Airline record
    router.post('/', Airline.create);

    //fetch all airline records
    router.get('/', Airline.getAll);

    //get airline by ID
    router.get('/:id', Airline.getByID);

    //update airline by ID
    router.put('/:id', Airline.updateByID);

    //delete airlines 
    router.delete('/', Airline.removeAll);

    //delete an airline by id
    router.delete('/:id', Airline.remove);

    //check this line
    app.use('/api/airline', router);
};
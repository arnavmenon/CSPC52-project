const sql = require('../config.js');

const Contains = function(contains)
{
    this.flight_code = contains.flight_code;
    this.airport_id = contains.airport_id;
};

Contains.create = (newContains) => {
    sql.query('insert into CONTAINS values (?, ?)', [newContains.flight_code, newContains.airport_id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("new Contains Record: ", {...newContains});
    });
};

Contains.remove = (flight_code) => {
    sql.query(`delete from CONTAINS where flight_code = '${remContains.flight_code}'`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found airport with the id
            result({ kind: 'not_found' }, null);
            return;
        }
        console.log('remove following Contains Object with flight_code: ', flight_code);
    });

};

module.exports = Contains;
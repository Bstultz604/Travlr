const mongoose = require('mongoose');           //.set('debug', true);
const Model = mongoose.model('trips');


// GET: /trips_schema - list all the trips
const tripsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all trips
        .exec((err, trips) => {
            if (trips.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
            }

            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            else {
                console.log("tripsList was called succesfully");
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

module.exports = {
    tripsList
};
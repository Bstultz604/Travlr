const mongoose = require('mongoose');           //.set('debug', true);
const Model = mongoose.model('rooms');


// GET: /trips_schema - list all the trips
const roomsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all trips
        .exec((err, rooms) => {
            if (rooms.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "rooms not found" });
            }

            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            else {
                console.log("roomsList was called succesfully");
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

module.exports = {
    roomsList
};
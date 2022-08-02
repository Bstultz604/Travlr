
/******************************************************************************************/
/*Logical controllers for specific data model*/
/*logic for 'rooms' model to access data from database*/
/*Methods in file can be called to obtain objects in JSON format of data*/
/*******************************************************************************************/

//Imports and uses mongoose class library features 
const mongoose = require('mongoose');  

//Creates object and compiles data schema for 'rooms' model
const Model = mongoose.model('rooms');


// GET: /rooms_schema - list all the rooms
const roomsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all rooms
        .exec((err, rooms) => {

            //Returns error status and message if data object is empty
            if (rooms.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "rooms not found" });
            }

            //Returns error status and error message if error occurs during get request
            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            //Returns success status and object of retireved data if no errors
            else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

//Exports methods to be used throughout app
module.exports = {
    roomsList
};
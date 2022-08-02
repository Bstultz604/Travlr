
/******************************************************************************************/
/*Logical controllers for specific data model*/
/*logic for 'meals' model to access data from database*/
/*Methods in file can be called to obtain objects in JSON format of data*/
/*******************************************************************************************/

//Imports and uses mongoose class library features
const mongoose = require('mongoose');      

//Creates object and compiles data schema for 'meals' model
const Model = mongoose.model('meals');


// GET: /meals_schema - list all the meals
const mealsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all meals
        .exec((err, meals) => {

            //Returns error status and message if data object is empty
            if (meals.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "meals not found" });
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
                    .json(meals);
            }
        });
};

//Exports methods to be used throughout app
module.exports = {
    mealsList
};
const mongoose = require('mongoose');           //.set('debug', true);
const Model = mongoose.model('meals');


// GET: /meals_schema - list all the meals
const mealsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all meals
        .exec((err, meals) => {
            if (meals.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "meals not found" });
            }

            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            else {
                console.log("mealsList was called succesfully");
                return res
                    .status(200)
                    .json(meals);
            }
        });
};

module.exports = {
    mealsList
};
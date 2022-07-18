const mongoose = require('mongoose');           //.set('debug', true);
const Model = mongoose.model('testimonials');


// GET: /blog_schema - list all the trips
const testimonialsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all trips
        .exec((err, testimonials) => {
            if (testimonials.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "testimonials not found" });
            }

            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            else {
                console.log("testimonialsList was called succesfully");
                return res
                    .status(200)
                    .json(testimonials);
            }
        });
};

module.exports = {
    testimonialsList
};
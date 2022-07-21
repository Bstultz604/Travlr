const mongoose = require('mongoose');           //.set('debug', true);
const Model = mongoose.model('blogs');


// GET: /blog_schema - list all the trips
const blogsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all trips
        .exec((err, blogs) => {
            if (blogs.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "blogs not found" });
            }

            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            else {
                console.log("blogsList was called succesfully");
                return res
                    .status(200)
                    .json(blogs);
            }
        });
};

const blogsByType = async (req, res) => {
    Model
        .find({ 'type': req.params.type })
        .exec((err, blogs) => {
            if (blogs.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "blogs not found" })
            }

            else if (err) {
                return res
                    .status(400)
                    .json(err);
            }

            else {
                return res
                    .status(200)
                    .json(blogs);
            }
        })
}

module.exports = {
    blogsList,
    blogsByType
};
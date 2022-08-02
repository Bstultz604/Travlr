
/******************************************************************************************/
/*Logical controllers for specific data model*/
/*logic for 'blogs' model to access data from database*/
/*Methods in file can be called to obtain objects in JSON format of data*/
/*******************************************************************************************/

//Imports and uses mongoose class library features 
const mongoose = require('mongoose');  

//Creates object and compiles data schema for 'blogs' model
const Model = mongoose.model('blogs');


// GET: /blog_schema - list all the blogs
const blogsList = async (req, res) => {
    Model
        .find({}) //empty filter to GET all blogs
        .exec((err, blogs) => {

            //Returns error status and message if data object is empty
            if (blogs.length == 0) {  
                return res
                    .status(404)
                    .json({ "message": "blogs not found" });
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
                    .json(blogs);
            }

        });
};

//// GET: /blog_schema - list of specific blogs by type parameter
const blogsByType = async (req, res) => {
    Model
        .find({ 'type': req.params.type })  //Filters search by type property 
        .exec((err, blogs) => {

            //Returns error status and message if data object is empty
            if (blogs.length == 0) {
                return res
                    .status(404)
                    .json({ "message": "blogs not found" })
            }

            //Returns error status and error message if error occurs during get request
            else if (err) {
                return res
                    .status(400)
                    .json(err);
            }

            //Returns success status and object of retireved data if no errors
            else {
                return res
                    .status(200)
                    .json(blogs);
            }
        })
}


//Exports methods to be used throughout app
module.exports = {
    blogsList,
    blogsByType
};
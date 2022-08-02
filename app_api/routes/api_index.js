
/**/
/*Maps the API call route to specific HTML request */
/*Calls then have an assoiated logic to enact*/
/*This logic can be found in the controllers folder (Route: travlr_MEAN/app_api/controllers/*) */
/*controller logic determiens how and what data is to be requested usign API*/
/**/

const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/api_trips');

const ctrlBlogs = require('../controllers/api_blogs');
const ctrlTestimonials = require('../controllers/api_testimonials');
const ctrlRooms = require('../controllers/api_rooms');
const ctrlMeals = require('../controllers/api_meals');

//Trips
router
    .route('/trips') //API route specifier
    .get(ctrlTrips.tripsList); //Method to be called when route is in use 

//--------------------------------------------------------------------------------------

//Blogs
router
    .route('/blogs') //API route specifier
    .get(ctrlBlogs.blogsList);  //Method to be called when route is in use 

router
    .route('/blogs/:type') //API route specifier
    .get(ctrlBlogs.blogsByType); //Method to be called when route is in use 

//--------------------------------------------------------------------------------------

//Testimonials
router
    .route('/testimonials') //API route specifier
    .get(ctrlTestimonials.testimonialsList); //Method to be called when route is in use 

//--------------------------------------------------------------------------------------


//rooms 
router
    .route('/rooms') //API route specifier
    .get(ctrlRooms.roomsList); //Method to be called when route is in use 

//--------------------------------------------------------------------------------------


//meals
router
    .route('/meals') //API route specifier
    .get(ctrlMeals.mealsList); //Method to be called when route is in use 

module.exports = router;
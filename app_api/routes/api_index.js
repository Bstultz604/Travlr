const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/api_trips');

const ctrlBlogs = require('../controllers/api_blogs');
const ctrlTestimonials = require('../controllers/api_testimonials');
const ctrlRooms = require('../controllers/api_rooms');
const ctrlMeals = require('../controllers/api_meals');

//Trips
router
    .route('/trips')
    .get(ctrlTrips.tripsList);
    //.post(ctrlTrips.tripsAddTrip);

/*router
    .route('/trips/:code')
    .get(ctrlTrips.tripsFindByCode);
    //.put(ctrlTrips.tripsUpdateTrip);*/

//---------------------------------------------------------------------------------------
//Blogs
router
    .route('/blogs')
    .get(ctrlBlogs.blogsList);

router
    .route('/blogs/:type')
    .get(ctrlBlogs.blogsByType);

//---------------------------------------------------------------------------------------

//Testimonials
router
    .route('/testimonials')
    .get(ctrlTestimonials.testimonialsList);

//rooms 
router
    .route('/rooms')
    .get(ctrlRooms.roomsList);

//meals
router
    .route('/meals')
    .get(ctrlMeals.mealsList);

module.exports = router;
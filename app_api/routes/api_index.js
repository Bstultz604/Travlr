const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/api_trips');
const ctrlBlogs = require('../controllers/api_blogs');
const ctrlTestimonials = require('../controllers/api_testimonials');

//Trips
router
    .route('/trips')
    .get(ctrlTrips.tripsList);
    //.post(ctrlTrips.tripsAddTrip);

/*router
    .route('/trips/:code')
    .get(ctrlTrips.tripsFindByCode);
    //.put(ctrlTrips.tripsUpdateTrip);*/

//Blogs
router
    .route('/blogs')
    .get(ctrlBlogs.blogsList);

//Testimonials
router
    .route('/testimonials')
    .get(ctrlTestimonials.testimonialsList);

module.exports = router;
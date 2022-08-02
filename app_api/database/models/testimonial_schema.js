
/**************************************************************************************************/
/*Models data that can be found in external database*/
/*Schema acts as class to help generate local objects as copiues of databse entries*/
/*See Controllersfolder for direct use of schema (Route: travlr_MEAN/app_api/contollers/*) */
/**************************************************************************************************/

//Imports and uses mongoose class library feature
const mongoose = require("mongoose");

//define the testimonial schema
//Method creates mapping between the database directory 'testimonials' contents
//And maps them to local objects with specified attributes from below
const testimonialSchema = new mongoose.Schema({	
	author: { type: String, required: true },
	content: { type: String, required: true },
});

//Exports Method and schema for use elsewhere in application
//Main use can be seen in Contollers folder (Route: travlr_MEAN/app_api/contollers/*)
module.exports = mongoose.model('testimonials', testimonialSchema);
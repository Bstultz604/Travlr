
/**************************************************************************************************/
/*Models data that can be found in external database*/
/*Schema acts as class to help generate local objects as copiues of databse entries*/
/*See Controllersfolder for direct use of schema (Route: travlr_MEAN/app_api/contollers/*) */
/**************************************************************************************************/

//Imports and uses mongoose class library features
const mongoose = require("mongoose");

//define the trip schema
//Method creates mapping between the database directory 'trips' contents
//And maps them to local objects with specified attributes from below
const tripSchema = new mongoose.Schema({
	code: { type: String, required: true, index: true },
	name: { type: String, required: true, index: true },
	length: { type: String, required: true },
	start: { type: Date, required: true },
	resort: { type: String, required: true },
	perPerson: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true }
});

//Exports Method and schema for use elsewhere in application
//Main use can be seen in Contollers folder (Route: travlr_MEAN/app_api/contollers/*)
module.exports = mongoose.model('trips', tripSchema);
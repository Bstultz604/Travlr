
/**************************************************************************************************/
/*Models data that can be found in external database*/
/*Schema acts as class to help generate local objects as copiues of databse entries*/
/*See Controllersfolder for direct use of schema (Route: travlr_MEAN/app_api/contollers/*) */
/**************************************************************************************************/

//Imports and uses mongoose class library features
const mongoose = require("mongoose");

//define the meal schema
//Method creates mapping between the database directory 'meals' contents
//And maps them to local objects with specified attributes from below
const mealSchema = new mongoose.Schema({
	type: { type: String, required: true },
	name: { type: String, required: true, index: true },	
	image: { type: String, required: true },
	description: { type: String, required: true }
});

//Exports Method and schema for use elsewhere in application
//Main use can be seen in Contollers folder (Route: travlr_MEAN/app_api/contollers/*)
module.exports = mongoose.model('meals', mealSchema);
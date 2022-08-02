
/**************************************************************************************************/
/*Models data that can be found in external database*/
/*Schema acts as class to help generate local objects as copiues of databse entries*/
/*See Controllersfolder for direct use of schema (Route: travlr_MEAN/app_api/contollers/*) */
/**************************************************************************************************/

//Imports and uses mongoose class library features
const mongoose = require("mongoose");

//define the room schema
//Method creates mapping between the database directory 'rooms' contents
//And maps them to local objects with specified attributes from below
const roomSchema = new mongoose.Schema({	
	name: { type: String, required: true, index: true },	
	description: { type: String, required: true },
	rate: { type: String, required: true },
	image: { type: String, required: false}
});

//Exports Method and schema for use elsewhere in application
//Main use can be seen in Contollers folder (Route: travlr_MEAN/app_api/contollers/*)
module.exports = mongoose.model('rooms', roomSchema);
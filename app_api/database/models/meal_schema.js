const mongoose = require("mongoose");

//define the trip schema
const mealSchema = new mongoose.Schema({
	type: { type: String, required: true },
	name: { type: String, required: true, index: true },	
	image: { type: String, required: true },
	description: { type: String, required: true }
});

//mongoose.model('trips', tripSchema);
module.exports = mongoose.model('meals', mealSchema);
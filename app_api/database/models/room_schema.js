const mongoose = require("mongoose");

//define the trip schema
const roomSchema = new mongoose.Schema({	
	name: { type: String, required: true, index: true },	
	description: { type: String, required: true },
	rate: { type: String, required: true },
	image: { type: String, required: false}
});

module.exports = mongoose.model('rooms', roomSchema);
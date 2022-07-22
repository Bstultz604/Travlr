const mongoose = require("mongoose");

//define the trip schema
const testimonialSchema = new mongoose.Schema({	
	author: { type: String, required: true },
	content: { type: String, required: true },
});

module.exports = mongoose.model('testimonials', testimonialSchema);
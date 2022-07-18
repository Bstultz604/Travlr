const mongoose = require("mongoose");

//define the trip schema
const blogSchema = new mongoose.Schema({
	title: { type: String, required: true, index: true },
	Date: { type: Date, required: true },
	author: { type: String, required: true },
	content: { type: String, required: true },	
});

module.exports = mongoose.model('blogs', blogSchema);
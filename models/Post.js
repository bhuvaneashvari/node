const mongoose = require('mongoose');
const Postschema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	body: {

		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

const Post = module.exports = mongoose.model('Post', Postschema);

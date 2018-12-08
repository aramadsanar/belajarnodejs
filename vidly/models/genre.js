
const mongoose = require('mongoose');
mongoose.set('debug', true)
const Joi = require('joi');

const genreSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		// validate: {
		// 	//isAsync: true,
		// 	validator: async function(v) {
		// 		let genre = await Genre.find({name: v});
		// 		console.log('param v', v)
		// 		console.log('genre', genre)
		// 		if (genre && genre.length > 0) {
		// 			console.log('ngebug ini')
		// 			return false;
		// 		}
		// 		else return true;

		// 	},
		// 	message: "genre udah ada"
		// }
	}
})

const Genre = new mongoose.model('genre', genreSchema);

module.exports.Genre = Genre;
module.exports.genreSchema = genreSchema
//module.exports = Genre;
let mongoose = require('mongoose')
let genreSchema = require('./genre').genreSchema;
let Joi = require('joi');
mongoose.set('debug', true)
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true
    },
    dailyRentalRate: {
        type: Number,
        min: 0,
        required: true
    }
})

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(5).max(255).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    }

    return Joi.validate(movie, schema)
}


const Movie = mongoose.model('Movie', movieSchema);






module.exports.movieSchema = movieSchema;
module.exports.Movie = Movie;
module.exports.validateMovie = validateMovie;
let mongoose = require('mongoose')
let genreSchema = require('./genre').genreSchema;
let Joi = require('joi');
const {Movie, movieSchema} = require('../models/movie');
const {Customer, customerSchema} = require('../models/customer');

const rentalSchema = new mongoose.Schema({
    customer: {
        type: customerSchema,
        required: true
    },
    movie: {
        type: movieSchema,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})

function validateRental(rental) {
    const validationSchema = {
        customerId: Joi.string().required(),
        movieId: Joi.string().required(),
        duration: Joi.number().min(1).max(30).required()
    }
    return Joi.validate(rental, validationSchema)
}

const Rental = new mongoose.model('rental', rentalSchema)

module.exports.validateRental = validateRental;
module.exports.rentalSchema = rentalSchema;
module.exports.Rental = Rental;


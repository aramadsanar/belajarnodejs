const express = require('express')
const router = express.Router()

const { movieSchema, validateMovie, Movie } = require('../models/movie');
const { Customer, customerSchema } = require('../models/customer');
const { Rental, validateRental, rentalSchema } = require('../models/rental');

router.get('/', async (req, res) => {
    let result = Rental.find();

    res.send(result);
});


router.post('/', async(req, res) => {
    const {error} = validateRental(req.body);

    if (error) res.status(400).send(error.details[0].message);

    let customer = await Customer.findById(req.body.customerId);
    let movie = await Movie.findById(req.body.movieId);

    if (!customer || !movie) res.status(400).send("customer id or movie id invalid");
    let newRental = new Rental({
        customer: customer,
        movie: movie,
        duration: req.body.duration
    });

    let result = await newRental.save()

    res.send(result);
})






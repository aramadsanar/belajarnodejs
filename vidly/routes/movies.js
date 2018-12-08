const express = require('express')
const router = express.Router()

const genreSchema = require('../models/genre').genreSchema;
const Movie = require('../models/movie').Movie;
const validateMovie = require('../models/movie').validateMovie;
const Genre = require('../models/genre').Genre;

router.get('/', async (req, res) => {
    let courses = await Movie.find();

    res.send(courses)
})

router.post('/', async (req, res) => {
    let reqBody = req.body
    const {error} = validateMovie(req.body);
    console.log(reqBody.genreId)
    if (error) {
        res.status(400).send(error.details[0].message)
    }

    console.log('tembus joi')
    let genre = await Genre.findById(reqBody.genreId);
    console.log(genre.name)
    let newMovie = new Movie({
        title: reqBody.title,
        genre: genre,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    })
    let result = await newMovie.save();
    try {
        
        console.log(result)
        res.send(result)
    } catch {
        res.status(400).send("error cuy")
    }
    
})

module.exports = router;
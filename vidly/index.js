const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vidly');
const app = express();

const Joi = require('joi');

const bodyParser = require('body-parser');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies)
const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`on port ${port}`)})
function validateName(genre) {
	const schema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(genre, schema);
}
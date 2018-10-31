const express = require('express');
const app = express();

const Joi = require('joi');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const genres = [
    {id: 1, name: 'horror'},
    {id: 2, name: 'comedy'},
    {id: 3, name: 'bokep'}
];

app.get('/api/genre', (req, res) => {
	res.send(courses);
});

app.post('/api/genre', (req, res) => {
	const { error } = validateName(req.body);

	if (error) {
		res.status(400).send(error.details[0].message);
	}

	genres.push({id: genres.length+1, name: req.body.name});
});

app.put('/api/genre/:id', (req, res) => {
	let genre = genres.find(c => c.id === parseInt(req.params.id));

	if (!genre) {
		res.status(404).send("not found");
	}

	const { error } = validateName(req.body);

	if (error) {
		res.status.(400).send(error.details[0].message);
	}

	genre.name = req.body.name;
	res.send(genre);
});

app.delete('/api/genre/:id', (req, res) => {
	let genre = genres.find(c => c.id === parseInt(req.params.id));

	if (!genre) {
		res.status(404).send("not found");
	}

	genres.splice(genres.indexOf(genre), 1);
	res.send(genre);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`on port ${port}`)})
function validateName(genre) {
	const schema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(genre, schema);
}
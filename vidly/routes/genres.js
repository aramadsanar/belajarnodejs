const express = require('express');
const router = express.Router();
const Genre = require('../models/genre').Genre;
// const genres = [
//     {id: 1, name: 'horror'},
//     {id: 2, name: 'comedy'},
//     {id: 3, name: 'bokep'}
// ];

router.get('/', async (req, res) => {
	const genres = await Genre.find({});
	
	res.send(genres);
});

router.post('/', async (req, res) => {
	const { error } = validateName(req.body);

	if (error) {
		res.status(400).send(error.details[0].message);
	}

	const genre = new Genre({
		name: req.body.name
	})
	try {
		const result = await genre.save();

		console.log(result)
		res.send(result)
	}

	catch (ex) {
		for (field in ex.errors) {
			res.send(ex.errors[field].message)
		}
	}
	//genres.push({id: genres.length+1, name: req.body.name});
});

router.put('/:id', async (req, res) => {
	//let genre = genres.find(c => c.id === parseInt(req.params.id));
	let genre = await Genre.findById(req.params.id);
	if (!genre) {
		res.status(404).send("not found");
	}

	const { error } = validateName(req.body);

	if (error) {
		res.status(400).send(error.details[0].message);
	}

	genre.name = req.body.name;
	let result = await genre.save();
	res.send(genre);
});

router.delete('/:id', async (req, res) => {
	//let genre = genres.find(c => c.id === parseInt(req.params.id));
	let result = await Genre.deleteOne({_id: req.params.id})
	if (!result) {
		res.status(404).send("not found");
	}

	//genres.splice(genres.indexOf(genre), 1);
	res.send(result);
});




module.exports = router;
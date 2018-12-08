const express = require('express')
const router = express.Router()
const Customer = require('../models/customer').Customer;

router.get('/', async (req, res) => {
    let result = await Customer.find();

    res.send(result);
})

router.post('/', async (req, res) => {
	const { error } = validateName(req.body);

	// if (error) {
	// 	res.status(400).send(error.details[0].message);
	// }
    console.log(req.body.emailAddress)
    console.log(req.body)
	const customer = new Customer({
        isGold: req.body.isGold,
        name: req.body.name,
        
        emailAddress: req.body.emailAddress
	})
	try {
		const result = await customer.save();

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
	let customer = await Customer.findById(req.params.id);
	if (!customer) {
		res.status(404).send("not found");
	}

	// const { error } = validateName(req.body);

	// if (error) {
	// 	res.status(400).send(error.details[0].message);
	// }

	customer.name = req.body.name;
	let result = await customer.save();
	res.send(customer);
});

router.delete('/:id', async (req, res) => {
	//let genre = genres.find(c => c.id === parseInt(req.params.id));
	let result = await Customer.deleteOne({_id: req.params.id})
	if (!result) {
		res.status(404).send("not found");
	}

	//genres.splice(genres.indexOf(genre), 1);
	res.send(result);
});

function validateName(genre) {
	const schema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(genre, schema);
}

module.exports = router;





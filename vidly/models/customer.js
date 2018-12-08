const mongoose = require('mongoose');
mongoose.set('debug', true)
const Joi = require('joi');


const customerSchema = new mongoose.Schema({
    isGold: Boolean,
    name: String,
    emailAddress: String
});

const Customer = new mongoose.model('customer', customerSchema);

module.exports.Customer = Customer;
module.exports.customerSchema = customerSchema;
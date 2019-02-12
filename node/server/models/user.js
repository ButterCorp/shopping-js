const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    username: String, 
    lastname: String, 
    firstname: String, 
    products: Array, //cart
    commands: Array
})

module.exports = db.model('User', userDetailsSchema);

    
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractorSchema = new Schema({

    name: String,
    email: String,
    occupation: String,
    price: String

    // name: {
    //     type: String, 
    //     // require: true
    // },
    // email: {
    //     type: String,
    //     // required: true
    // },
    // occupation: {
    //     type: String,
    //     // required: true
    // },
    // price: {
    //     type: String,
    //     // required: true
    // }
});

const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
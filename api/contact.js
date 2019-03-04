const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: Object,
    email: String,
    number: Number,
    location: String,
    message: String
},
{
    collection: 'contacts'
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
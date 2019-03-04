const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    it_name: { type: String, required: true },
    it_price: { type: String, required: true },
    category: { type: String, required: true },
    qty_in_stock: { type: Number, required: true },
    tags: { type: [String], required: true },
    comp_id: { type: [String], required: true },
    date_of_entry: { type: String },
},{
    collection: 'items'
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
    order_id: {type: String, required: true},
    customer_id: {type: Number, required: true},
    order_details: {type: Object, required: true },
    customer_details: {type: Object, required: true}
},
{
    collection: 'sales'
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;
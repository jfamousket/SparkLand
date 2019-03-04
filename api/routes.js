const Item = require('./item');
const Order = require('./order');
const Contact = require('./contact');
const ObjectID = require('mongodb').ObjectID;

module.exports = function (app) {
    app.route('/getMenu').get((req, res) => {
        Item.find({}, (err, items) => {
            let itemList = []
            items.forEach(item => {
                itemList.push(item)
            })
            res.status(200).send(itemList)
        })
    })
    app.route('/getCategory').get((req, res) => {
        Item.find({},'category', (err, category) => {
            console.log(category)
            let categories = []
            category.forEach(cat => {
                categories.push(cat)
            })
            res.status(200).send(categories)
        })
    });
    app.route('/getItem/:name').get((req, res) => {
        Item.findOne({ it_name: req.params.name }, (err, item) => {
            console.log(item)
            res.status(200).send(item)
        });
    });

    app.route('/addSale').post((req, res) => {
        let order = {
            ...req.body.data,
            date_created: new Date()
        }
        Order.create(order, (err, newOrder) => {
            if(err){
               return res.status(400).send(err); 
            } 
           res.status(200).send(newOrder) 
        })  
    });

    app.route('/contact').post((req, res)=> {
        let contact = {
            ...req.body.data,
            date_created: new Date()
        }
        Contact.create(contact, (err, newContact) => {
            if(err) {
                console.log(err)
                return res.status(404).send(err);
            }
            res.status(200).send(newContact);
        })
    })
}
const Item = require("./item");
const Order = require("./order");
const Contact = require("./contact");
const express = require("express");
const router = express.Router();

router.route("/getMenu").get((req, res) => {
  Item.find({}, (err, items) => {
    let itemList = [];
    items.forEach(item => {
      itemList.push(item);
    });
    console.log("sending");
    res.status(200).send(itemList);
  });
});
router.route("/getCategory").get((req, res) => {
  Item.find({}, "category", (err, category) => {
    let categories = [];
    category.forEach(cat => {
      categories.push(cat);
    });
    res.status(200).send(categories);
  });
});
router.route("/getItem/:name").get((req, res) => {
  Item.findOne({ it_name: req.params.name }, (err, item) => {
    res.status(200).send(item);
  });
});

router.route("/addSale").post((req, res) => {
  console.log(req);
  let order = {
    ...req.body.data,
    date_created: new Date()
  };
  Order.create(order, (err, newOrder) => {
    if (err) {
      console.log(err.status);
      return res.status(400).send(err);
    }
    res.status(200).send(newOrder);
  });
});

router.route("/contact").post((req, res) => {
  let contact = {
    ...req.body.data,
    date_created: new Date()
  };
  Contact.create(contact, (err, newContact) => {
    if (err) {
      console.log(err);
      return res.status(404).send(err);
    }
    res.status(200).send(newContact);
  });
});

module.exports = router;

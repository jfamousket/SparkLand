const express = require("express");
const mongoose = require("mongoose");
const routes = require("./api/routes");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/dist`));
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", routes);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on port " + listener.address().port);
});

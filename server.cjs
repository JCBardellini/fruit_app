
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const PORT = 3000;

const Veggie = require("./models/Veggie.cjs")
const Fruit = require("./models/Fruit.cjs");

// allows us to use process.env (get variables from .env file)
// order matters
require("dotenv").config();

require("./config/db.cjs");

const app = express();

const middleware = (req, res, next) => {
  console.log("doing stuff");
  next();
};

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));

app.use(middleware);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("here is your valuable data");
});

app.get("/fruits", async (req, res) => {
    let fruitsFromDB = await Fruit.find();
    console.log(fruitsFromDB);
    res.send(fruitsFromDB);
});

app.post("/fruits", async (req, res) => {
  //   console.log(req.body);
  let fruit = req.body;
  let responseFromDB = await Fruit.create(fruit);
  console.log(responseFromDB);
  res.send(responseFromDB)
});

app.get("/veggies", async (req, res) => {
  let veggiesFromDB = await Veggie.find();
  res.send(veggiesFromDB)
})

app.post("/veggies", async (req, res) => {
  // make veggies model
  let dbResponse = await Veggie.create(req.body)
  res.status(201).send(dbResponse)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

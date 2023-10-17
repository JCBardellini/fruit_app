const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const PORT = 3000;

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

app.get("/fruits", (req, res) => {
  //   res.send(fruits);
});

app.post("/fruits", (req, res) => {
  //   console.log(req.body);
  let fruit = req.body;
  Fruit.create(fruit);
  fruits.push(req.body);
  res.send("route is good");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

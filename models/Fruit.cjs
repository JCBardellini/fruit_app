// create a schema (breakdown of what our data should like)
const mongoose = require("mongoose");

const fruitsSchema = new mongoose.Schema(
  {
    name: String,
    color: String,
    readyToEat: Boolean,
  },
  {
    timestamps: true,
  }
);
// create a model with that schema
// need to put which collection and our schema
const Fruit = mongoose.model("Fruit", fruitsSchema);

module.exports = Fruit;

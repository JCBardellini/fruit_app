const mongoose = require("mongoose");

const veggieSchema = new mongoose.Schema(
  {
    name: String,
    color: String,
    readyToEat: Boolean,
    age: Number,
    isHealthy: Boolean,
  },
  {
    timestamps: true,
  }
);
// create a model with that schema
// need to put which collection and our schema
const Veggie = mongoose.model("Veggie", veggieSchema);

module.exports = Veggie;

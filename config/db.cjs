// connect mongoose to the database
// later when we use mongoose somewhere else, it will be already connected

const mongoose = require("mongoose");

let connectionString = `mongodb+srv://jcbardellini12:${process.env.MONGO_PASS}@cluster0.zisnwcn.mongodb.net/Food?retryWrites=true&w=majority`;

console.log(connectionString);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// log when connected
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");
});

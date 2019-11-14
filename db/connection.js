const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ghibli", {
  useNewUrlParser: true
});
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/ghibli";
}

module.exports = mongoose;

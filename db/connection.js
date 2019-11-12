const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ghibli", {
  useNewUrlParser: true
});
module.exports = mongoose;

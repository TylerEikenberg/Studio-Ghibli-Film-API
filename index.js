const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(4000, () => {
  console.log(`hello you're server is running on port 4000`);
});

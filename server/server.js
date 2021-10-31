const express = require("express");

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Działa!");
});

app.listen(PORT, err => {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on Port: ${PORT}`);
});

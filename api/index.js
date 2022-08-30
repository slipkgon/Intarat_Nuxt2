const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
app.use(express.json({ limit: "50mb" }));

app.get("/hello", (req, res) => {
  res.json({ message: "Hello My Intarat Mekloy" });
});

module.exports = app;

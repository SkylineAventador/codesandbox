const express = require("express");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello world, I'm running on Express framework!");
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

require("dotenv").config();

const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.use((req, res) => {
  res.render("index");
});

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

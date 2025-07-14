require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const data = require("./MOCK_DATA.json");

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res) => {
  //   res.send(path.join(__dirname, "views", "index.html"));
  res.json(data);
});

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

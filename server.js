require("dotenv").config();

const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
  res.send("server is working...");
})

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

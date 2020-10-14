const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.listen(PORT, console.log(`Server is on ${PORT}`));

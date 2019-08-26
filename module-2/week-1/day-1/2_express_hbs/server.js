const express = require("express");
const app = express();
const path = require("path");

// Make everything inside of public/ available
app.use(express.static(path.join(__dirname, "public"))); // rock solid cross-OS syntax
// creates an absolute path pointing to a folder called "views"
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const data = {
    name: "John Bar",
    bootcamp: "Cohort 157",
    markup: "<b>some interpreted HTML</b>",
    isTruthy: 0,
    isInactive: true,
    address: "226 bvd Voltaire 75011 Paris"
  };
  res.render("index", data); // data has to be an object !!!
});

app.get("/about", (req, res) => {
  const data = {
    title: "About page !",
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín", "Pekin"],
    peoples: [
      { age: 23, name: "foo" },
      { age: 33, name: "bar" },
      { age: 44, name: "baz" }
    ]
  };
  res.render("about", data);
});

app.listen(4000, () => {
  console.log("server is up @ http://localhost:4000");
});

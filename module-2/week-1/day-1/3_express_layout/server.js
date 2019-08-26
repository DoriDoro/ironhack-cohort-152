const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
// Make everything inside of public/ available
app.use(express.static(path.join(__dirname, "public"))); // rock solid syntax
app.set("views", path.join(__dirname, "views")); // absolute path to a folder called "views"
// set the view engine ; )
app.set("view engine", "hbs");
// register view partials folder
hbs.registerPartials(path.join(__dirname + "/views/partials"));

app.get("/", (req, res) => {
  const data = {
    users: ["foo", "bar", "baz"]
  };
  res.render("index", data);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  const data = null;
  res.render("contact", data);
});

const listener = app.listen(5000, () => console.log(`server is up @ http://localhost:${listener.address().port}`));

// 1 npm init -y to kickstart the app with default settings
// 2 NPM install the dependencies (express, hbs )
// 3 if git init .... add a .gitignore file to ignore node_modules/ folder
// 4 require express in you mains server file
// 5 execute express to get an app out of it
// 6 app.listen(port) to kickstart server listening
// 7 app.get() setup a route to response to client requests
// 8 ... nodemon the main file !!!

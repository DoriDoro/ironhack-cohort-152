require("dotenv").config();

const express = require("express"); // super framework
const hbs = require("hbs"); // templating engine
const server = express(); // initialize the server app
const path = require("path"); // require a core node lib to format path on file system

// server config ---
// 1 where are my static assets (downloadable ) =>
server.use(express.static(path.join(__dirname, "/public")));
// // 2 where are my view ? =>
server.set("views", path.join(__dirname, "/views"));
// // 3 what templating engine am i using =>
server.set("view engine", "hbs");
// // 4 where hbs should look for the partials =>
hbs.registerPartials(__dirname + "/views/partials");

// base routes
server.get("/", (req, res) => {
  // / is the base route !!!
  res.render("index"); // usually leading to the homepage ...
});

const listener = server.listen(process.env.PORT, () => {
  console.log(`server started at http://localhost:${listener.address().port}`);
});

const express = require("express");
const hbs = require("hbs");
const path = require("path");
const server = express();

// config
server.use(express.urlencoded({ extended: true })); 
// parse POST strings
server.use(express.static(__dirname + "/public"));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/views/partials"));

// routes
server.get("/", (req, res) => {
  res.render("index");
});

// hardcoded variable, used for demo purposes (coming from db most of the time)
const users = [
  // fake database
  { name: "Jill", id: 1 }, // 0
  { name: "Bill", id: 2 }, // 1
  { name: "Will", id: 3 } // 2
];

server.get("/users", (req, res) => {
  res.render("users", { users });
});

server.get("/users/:id", (req, res) => {
  // let's find a use for the request object !
  // a route segment is any string after a "/" sign
  // any segment can be used to pass data to the server
  // here /:id is a meaningfull segment, containing any user's id !!!
  // you can access route params through req.params
  const foundUser = users.filter(user => user.id === Number(req.params.id))[0]; // 0 to access first index of the returned array (filter always returns an array)
  console.log(foundUser);
  res.render("user_details", {
    user: foundUser
  });
});

server.get("/find-user", (req, res) => {
  console.log(req.query); // req.query will hold any name:value pairs : these are autmaticaly extracted from our find_user form. 
  const foundUser = users.filter(user => user.name.toLowerCase() === req.query.name.toLowerCase())[0];
  res.render("user_find", { user: foundUser });
});

// CREATE USER(S) !!!!

// step 1 : serve the create user view
server.get("/create-user", (req, res) => {
  res.render("user_create");
});

// step 2 : process form submission
server.post("/user", (req, res) => {
  console.log("req.body"); // req.body holds the POSTed data !!!
  console.log(req.body);
  var msg;
  if (req.body.name !== "") {
    users.push({ name: req.body.name, id: users.length + 1 });
    msg = "user successfully created !";
  } else {
    msg = "please fill name field !";
  }
  res.render("user_create", { msg });
});

// kickstart
const listener = server.listen(4444, () => {
  console.log(`server started at http://localhost:${listener.address().port}`);
});

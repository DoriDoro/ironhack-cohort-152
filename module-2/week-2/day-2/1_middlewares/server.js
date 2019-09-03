// check doc @ https://expressjs.com/en/guide/using-middleware.html

const express = require("express");
const app = express();
const fs = require("fs");

function myFirstMiddleware(req, res, next) {
  console.log("@ myFirstMiddleware");
  req.foo = "franck the tank :D !!!";
  next();
}

function registerLog(req, res, next) {
  const str = Date.now() + " - " + req.method + " : " + req.path + "\n";

  fs.appendFile(__dirname + "/logs.txt", str, err => {
    if (err) console.log(err);
    next();
  });
}

function passingArgToAMiddleware(value) {
  console.log("argument : " + value);
  // where using a closure here ; )
  // the returned function will remember the passed value
  // the returned func will be executed each time we it a route
  return function(req, res, next) {
    // we can use the initial value each time and augment it
    req.augmentedArgument = value + " augmented";
    // req will be accessible in route callback
    next();
  };
}

//  app.get("*", (req, res) => {
//     // --------- sending data back to client
//     res.send("content 0 sent back.");
// });

app.get("/foo", myFirstMiddleware, (req, res) => {
  console.log("what ? > ", req.foo);
  // --------- sending data back to client
  res.send("content 1 sent back.");
});

// chaining middlewares
// app.get("*", myFirstMiddleware, registerLog, (req, res) => {
//     // --------- sending data back to client
//     res.send("content 2 sent back.");
// });

// chaining meddlewares + passing argument to a middleware
app.get(
  "*",
  myFirstMiddleware,
  registerLog,
  passingArgToAMiddleware("hello world"),
  (req, res) => {
    console.log("what ? > ", req.augmentedArgument);
    res.send("content 3 sent back."); // sending data back to client
  }
);

app.listen(3333, () => {
  console.log("app serving content @ http://localhost:3333");
});

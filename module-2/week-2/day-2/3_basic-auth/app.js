require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const favicon = require("serve-favicon");
const hbs = require("hbs");
const path = require("path");
// LOGIN SPECIFIC DEPENDENCIES
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
// END OF LOGIN SPECIFIC DEPENDENCIES

require("./config/mongodb");

// Middleware Setup
app.use(express.json()); // mandatory to parse post request
app.use(express.urlencoded({ extended: false })); // mandatory to parse post request

// LOGIN CONFIG HERE //
app.use(cookieParser()); 
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);
// END OF LOGIN CONFIG HERE //
app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
// Express View engine setup
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
hbs.registerPartials(__dirname + "/views/partials");

// default value for title local
// app.locals global variables for the template (hbs)
app.locals.title = "Easy login";

const index = require("./routes/index"); // router 1 : base routes
const auth = require("./routes/auth"); // router 2 : auth process

app.use(index); // using router 1
app.use(auth); // using router 2

module.exports = app;

require("dotenv").config(); // get env variable for easy dev AND deployment
require("./config/cloudinary"); // get env variable for easy dev AND deployment
require("./config/db_connection"); // database initial setup
require("./utils/hbs_helpers"); // custom functions adding usefull features to hbs templates

const express = require("express"); // import this node framework
const app = express(); // execute express and get an app out of it !
const hbs = require("hbs"); // template engine import

// ==> login
const session = require("express-session"); //sessions make data persist between http calls
const sessionStore = new session.MemoryStore(); // mandatory for flashMessage

/* setup session for login AND flashMessages after page redirection */
// app.use(
//   session({
//     cookie: { maxAge: 1800000 },
//     store: sessionStore,
//     saveUninitialized: true,
//     resave: true,
//     secret: process.env.SESSION_SECRET
//   })
// );

/* setup app */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
/* HBS setup + custom helper(s)  */
hbs.registerPartials(__dirname + "/views/partials");

/*  app routers */
const basePagesRouter = require("./routes/index");
const productRouter = require("./routes/product");

/* link the routers to the app */
/* BASE PAGES */
app.use(basePagesRouter);
app.use(productRouter);


app.listen(process.env.PORT || 5000, () => {
  // console.log(listener)
  console.log("app started at " + process.env.SITE_URL );
});

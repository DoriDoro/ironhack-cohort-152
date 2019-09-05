require("dotenv").config(); // get env variable for easy dev AND deployment
require("./config/cloudinary"); // get env variable for easy dev AND deployment
require("./config/mongodb"); // database initial setup
require("./utils/hbs_helpers"); // custom functions adding usefull features to hbs templates

const express = require("express"); // import this node framework
const server = express(); // execute express and get an app out of it !
const hbs = require("hbs"); // template engine import

// ==> login
const session = require("express-session"); //sessions make data persist between http calls
const sessionStore = new session.MemoryStore(); // mandatory for flashMessage

/* setup session for login AND flashMessages after page redirection */

/* setup app */
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(__dirname + "/public"));
server.set("views", __dirname + "/views");
server.set("view engine", "hbs");
/* HBS setup + custom helper(s)  */
hbs.registerPartials(__dirname + "/views/partials");

/*  app routers */
const basePagesRouter = require("./routes/index");
const productRouter = require("./routes/product");

/* link the routers to the app */
/* BASE PAGES */
server.use(basePagesRouter);
server.use(productRouter);


server.listen(process.env.PORT || 5000, () => {
  // console.log(listener)
  console.log("app started at http://localhost:" + process.env.PORT );
});

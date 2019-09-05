require("dotenv").config(); // get env variable for easy dev AND deployment
require("./config/cloudinary"); // get env variable for easy dev AND deployment
require("./config/db_connection"); // database initial setup
require("./utils/hbs_helpers"); // custom functions adding usefull features to hbs templates

const express = require("express"); // import this node framework
const app = express(); // execute express and get an app out of it !
app.locals.site_url = process.env.SITE_URL; // used in front end to perform ajax request on a url var instead of hardcoding it

const bodyParser = require("body-parser"); // middleware to get data out of http requests body
const hbs = require("hbs"); // template engine import

// ==> login
const session = require("express-session"); //sessions make data persist between http calls
const sessionStore = new session.MemoryStore(); // mandatory for flashMessage
const passport = require("passport");
const flash = require("connect-flash");

// CUSTOM MIDDLEWARE (must be placed before app.routers)
// check if user is logged in... used for display purposes in hbs templates
// this function must be declared before the session setup
function checkloginStatus(req, res, next) {
  res.locals.isLoggedIn = req.isAuthenticated(); // {{isLoggedIn}} in .hbs
  res.locals.user = req.user; // {{user}} in .hbs
  // console.log(req);
  next();
}

/* setup session for login AND flashMessages after page redirection */
app.use(
  session({
    cookie: { maxAge: 1800000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET
  })
);

app.use(passport.initialize()); // init passport lib
app.use(passport.session()); // connect passport to session system
app.use(checkloginStatus); // check user connection at each server request
app.use(flash()); // setup flash message for passport
// ==> login

/* setup app */
app.use(express.json()); // parse ajax post
app.use(express.urlencoded({ extended: false })); // parse sync post
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


/*  app routers */
const basePagesRouter = require("./routes/index");
const dashboardUserRouter = require("./routes/router_dashboard_user");
const authRouter = require("./routes/router_auth");
const dashboardProductRouter = require("./routes/router_dashboard_product");
const dashboardCategoryRouter = require("./routes/router_dashboard_category");
const dashboardPackRouter = require("./routes/router_dashboard_pack");
const apiUser = require("./routes/api_user");
const apiProduct = require("./routes/api_product");
const apiCategory = require("./routes/api_category");

/* HBS setup + custom helper(s)  */
hbs.registerPartials(__dirname + "/views/partials");

// CUSTOM MIDDLEWARE (must be placed before app.routers)
// flashMessageCatcher -- from Ethan Brown's book, 'Web Development with Node & Express'
app.use(function flashMessageCatcher(req, res, next) { // check presence of flash message in request
  res.locals.flashMessage = req.session.flashMessage;// make it available in the response,
  delete req.session.flashMessage; // then delete it from session
  next();
});

/* link the routers to the app */
/* BASE PAGES */
app.use(basePagesRouter);
app.use(authRouter);
/* HTML PAGES ROUTERS */
app.use("/dashboard/user/", dashboardUserRouter);
app.use("/dashboard/product/", dashboardProductRouter);
app.use("/dashboard/category/", dashboardCategoryRouter);
app.use("/dashboard/pack/", dashboardPackRouter);
/* DATA ACCESS API */
app.use("/api/product/", apiProduct.router);
app.use("/api/user/", apiUser.router);
app.use("/api/category/", apiCategory.router);

// 404 CUSTOM MIDDLEWARE => redirects any 404 to one error page
// !!! warning ===> must be placed AFTER every app routes !
app.use(function handle404(req, res) {
  res.status(404).render("page_not_found");
});

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log(
    `app started at ${process.env.SITE_URL}`
  );
});

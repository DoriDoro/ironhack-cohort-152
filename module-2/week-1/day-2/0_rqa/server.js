require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 9999;

console.log(process.env.PORT);

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => res.redirect("/home"));

app.get("/home", (req, res) => {
  let data = {
    title: "home",
    scripts: ["dom-handler.js"],
    imgLinks: [
      {
        label: "go to about",
        src: "fractale-1.jpg",
        href: "/about",
        alt: "foo"
      },
      {
        label: "go to contact",
        src: "fractale-2.jpg",
        href: "/contact",
        alt: "bar"
      }
    ],
    imgLinks2: [
      {
        label: "go to foo",
        src: "fractale-3.jpg",
        href: "/products",
        alt: "baz"
      },
      { label: "go to bar", src: "fractale-4.jpg", href: "/home", alt: "bim" }
    ]
  };
  res.render("home", data);
});

app.get("/about", (req, res) => {
  let data = {
    title: "about",
    scripts: ["dom-handler.js", "about-handler.js"]
  };
  res.render("about", data);
});

app.get("/products", (req, res) => {
  let data = {
    title: "products"
  };
  res.render("products", data);
});

app.get("/contact", (req, res) => {
  let data = {
    username: "Loup",
    some_piece_of_html_code_i_want_to_display: "<p>lorem bla bla</p>",
    title: "contact",
    imgLinks2: [
      {
        label: "go to foo",
        src: "fractale-3.jpg",
        href: "/products",
        alt: "baz"
      },
      { label: "go to bar", src: "fractale-4.jpg", href: "/home", alt: "bim" }
    ]
  };
  res.render("contact", data);
});

const listener = app.listen(port, () => {
  console.log(`server started http://localhost:${listener.address().port} `);
});

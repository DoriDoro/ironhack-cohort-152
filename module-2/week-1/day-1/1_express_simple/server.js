// 1 npm init -y to kickstart the app with default settings
// 2 NPM install the dependencies (express, hbs, mongoose, etc.... )
// 3 if git init .... add a .gitignore file to ignore node_modules/ folder
// 4 require express in you mains server file
// 5 execute express to get an app out of it
// 6 app.listen(port) to kickstart server listening
// 7  setup a route to response to client requests
// 8 ... nodemon the main file !!!

// create 3 pages : home / about / contact 
// bonus => create a front-end script =>
//    counting the number of tag on the page when user clicks a button

const express = require("express");
const app = express();

// console.log("-----------"); console.log(__dirname);

// Make everything inside of public/ available
app.use(express.static("public")); // allow downloads in this folder !!!

app.get("/", (req, res) => {
  res.send('<h1 class="title">hello world !</h1>');
});

app.get("/test-1", (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <h1 class="title">Yo !</h1>
        <img src="/img/fractal.jpg" />
      </body>
    </html>
  `);
});

app.get("/test-2", (req, res) => {
  res.sendFile(__dirname + "/views/test.html");
});

app.listen(3000, () => console.log("server is up @ http://localhost:3000"));

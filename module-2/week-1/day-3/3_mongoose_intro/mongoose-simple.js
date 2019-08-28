const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exampleApp", { useNewUrlParser: true });

// MVC
// MODEL database stored values => mongodb
// VIEW (what your user can see ... pages !!!) => hbs
// CONTROLER (chef d'orchestre) => express's routing functions + middlewares

const Cat = mongoose.model("Cat", { name: String });

function addNewCat(catName) {
  const oneCat = new Cat({ name: catName });
  // cat.save(err => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(`meow! ${catName} SAVED.`);
  //   }
  // });
  oneCat
    .save()
    .then(res => {
      console.log("one cat has been saved to DB");
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function showCats() {
  Cat.find({}, (err, cats) => {
    cats.forEach(cat => {
      console.log(" --> cat: ", cat.name);
    });
  });
}

function addTenCats() {
  for (let i = 0; i < 10; i++) {
    addNewCat(`Cat ${i}`);
  }
}

// addTenCats();
addNewCat(`Mina`);

/* We have to wait for our cats to save before displaying them
 Remember, it's async */
setTimeout(showCats, 1500);

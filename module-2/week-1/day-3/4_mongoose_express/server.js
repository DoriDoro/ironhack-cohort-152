const mongoose = require("mongoose");
const crudHandler = require("./student-crud");

mongoose.connect("mongodb://localhost/mongo-express-intro", {
  useNewUrlParser: true
});


// console.log("crudHandler --->");
// console.log(crudHandler);

crudHandler.createStudent().then(res => {
  console.log("a student has been inserted in database");
});

// crudHandler.updateStudent("5d667797f65a4e03f65ce55e", "guillaume@gmail.com");

// crudHandler.deleteStudent("5d66781a07330d0405951e2e");
// crudHandler.deleteStudent("5d66783ac0f4bf04146ce2dc");
// crudHandler.deleteStudent("5d66784a7f830304239251dd");

// DIY : create a route, get all students, pass them to a view and display them !

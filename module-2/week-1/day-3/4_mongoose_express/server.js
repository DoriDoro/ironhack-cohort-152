const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-express-intro", { useNewUrlParser: true });

const crudHandler = require("./student-crud");

console.log(crudHandler);

// crudHandler.createStudent();
// crudHandler.updateUser("5d663cb0a82023a66a2d3aeb");
// crudHandler.deleteUser("5d663cb0a82023a66a2d3aeb");

// DIY : create a route, get all students, pass them to a view and display them !
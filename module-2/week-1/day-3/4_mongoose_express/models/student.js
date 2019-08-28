const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema; // assign the Schema constructor to a constant

// ... instanciate the Schema with option (the blueprint)
const studentSchema = new Schema({
    age: Number,
    cohort: Number,
    email: String,
    firstname: String,
    lastname: String
});

const studentModel = mongoose.model("Student", studentSchema); 
// create a model using the schema
// a "students" collection will be automatically created when inserting the first student in database
module.exports = studentModel;

/*
----------------------------
    Available types
----------------------------
String (ex: Ironhack)
Number (ex: 42)
Date (ex: Date('2020-12-25'))
Boolean (ex: true)
Schema.Types.ObjectId: to store ids of other collections (ex: Ironhack)
Schema.Types.Mixed: to store anything
Array or []: to store an array of anything (ex: ['foo', 42])
[String]: to store an array of strings (ex: ['foo', 'bar'])
[Number]: to store an array of numbers (ex: [42, -6])
 */
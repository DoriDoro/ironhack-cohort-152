const Student = require("./models/student");

console.log("Student --->");
console.log(Student);

// SMALL TEMPORARY UTIL FUNCTION
function createStudent() {
  return Student.create({
    age: 23,
    cohort: 137,
    email: "foo@baz.com",
    firstname: "Jim",
    lastname: "Bar"
  });
}

function updateStudent(id, newMail) {
  return Student.findByIdAndUpdate(id, { email: newMail })
    .then(res => {
      console.log("user updated", res);
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteStudent(id) {
  Student.findByIdAndRemove(id)
  .then(res => {
    console.log("user removed from db", res);
  })
  .catch(err => {
    console.error(err);
  });
}

module.exports = {
  createStudent,
  deleteStudent,
  updateStudent
};

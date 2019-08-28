const Student = require("./models/student");

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

function updateUser(id) {
  return Student.findByIdAndUpdate(id, { email: "update@mail.com" })
    .then(res => {
      console.log("user updated", res);
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteUser(id) {
  return Student.findByIdAndRemove(id)
    .then(res => {
      console.log("user removed from db", res);
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {
  createStudent,
  deleteUser,
  updateUser
};

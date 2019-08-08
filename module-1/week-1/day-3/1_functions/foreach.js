const brands = ["nike", "adidas", "suit", "element", "lrg"];

const users = [
  { name: "foo", age: 23, hobbies: ["art", "foo", "music", "sleeping"] },
  { name: "bar", age: 44, hobbies: ["soccer", "street art", "surf"] },
  { name: "baz", age: 56, hobbies: ["food", "biking", "painting"] }
];

console.log("------------------");

brands.forEach(b => console.log(b));

console.log("------------------");

users.forEach(user => {
  console.log(`This user is called ${user.name} and is ${user.age} years old`);

  user.hobbies.forEach((hobby) => console.log(hobby))
});

console.log("------------------");

for (let i = 0; i < users.length; i += 1) {
  console.log(
    `This user is called ${users[i].name} and is ${users[i].age} years old`
  );

    for (let j = 0; j < users[i].hobbies.length; j += 1) {
        console.log(users[i].hobbies[j]);
    }

}


// Create an array containing objects.
// Each object contains at least one array !!! 
// Create a function to parse this array and display all contents nicely in the console ! 
// You are free to choose any subject ... music, food, brands, sports, etc.
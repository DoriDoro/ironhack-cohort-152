function Foo(name) {
    // properties => tied to the constructor function
    this.name = name || "Foo";
    this.isUsefull = true;
    this.hobbies = [];
}

Foo.prototype.sayMyName = function() {
    return this.name;
};

Foo.prototype.addOneHobbie = function(hobby) {
    this.hobbies.push(hobby);
};

const o1 = new Foo("Bill"); // o1 is an instance of Foo
const o2 = new Foo("Jill"); // o2 is an instance of Foo
const o3 = new Foo(); // o3 is an instance of Foo


// console.log(o1.choobidoowaa);
console.log(o1.hasOwnProperty);

// console.log(o1.sayMyName());
// o2.addOneHobbie("skateboard");
// console.log(o2);
// console.log(o1.sayMyName());
// console.log(o2.sayMyName());
// console.log(o3.sayMyName());

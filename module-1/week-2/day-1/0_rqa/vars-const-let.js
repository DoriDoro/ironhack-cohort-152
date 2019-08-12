console.log("x @ global-scope 1 ->", x);

var x = 0;

console.log("x @ global-scope 2 ->", x);

function foo() {
  var x = 1;
  console.log("x @ foo ->", x);
}

function bar() {
  var x = 10;
  console.log("x @ bar ->", x);
}

bar();

(function baz() {
  var x = 100;
  console.log("x @ baz ->", x);

  function a() {
    var y = 1000;
    console.log("x @ baz/a ->", x);
    console.log("y @ baz/a ->", y);
  }

  a();
  console.log("y @ baz ->", x);
})(); // IIFE

if (true) {
  let verified = "yay";
  console.log("verified in IF", verified);
}

// console.log("verified out of IF", verified);

try {
  console.log(user);
  const user = { name: "Jill", age: 37 };
  // console.log(user);
} catch (err) {
  console.error(err);
}

console.log("-finish line-")

// console.log(user);

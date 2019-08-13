
// try to guess what this program outputs

var a = 1;

function foo() {
  var a = 2;
  console.log(a); // 2
}

function bar() {
  a = 3;
  console.log(a); // 3
}

function baz() {
  a = 6;
  console.log(a); // 6
}

foo();
bar();
// baz();
console.log(a); // 3
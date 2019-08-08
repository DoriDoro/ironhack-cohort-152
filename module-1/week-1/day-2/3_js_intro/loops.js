// for - while - do... while [ - for in - for of - forEach ]

var users = [];

console.log(users.length);

users.push({ name: "foo" });
users.push({ name: "bar" });
users.push({ name: "baz" });

console.log(users.length);

for (let i = 0; i < users.length; i += 1) {
  console.log(i);
  console.log(users[i]);
}

console.log("for is finito");

var count = 0;

while (count < 5) {
  console.log(count);
  count += 1;
}

// stops after 3 iterations
console.log("while is finito");

var user = null,
  count2 = 0;

do {
  console.log("in da loop");
  if (count2 === 3) {
    user = { name: "nihil" };
  }
  count2 += 1;
} while (!user);

console.log("do...while is finito");

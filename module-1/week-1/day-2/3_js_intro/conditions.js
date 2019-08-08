users = [{ name: "foo" }, { name: "bar" }, { name: "baz" }];

if (10 < 100) {
  console.log("yeah sure !!!");
} else {
  console.log("will never happend");
}

if (users[0].name === "foo") {
  console.log("we have a foo ...");
}
if (users[1].name === "bar") {
  console.log("we have a bar ...");
}
if (users[2].name === "baz") {
  console.log("we have a baz ...");
}

////////////////

if (users[0].name === "gui") {
  console.log("do we have a foo ?");
} else if (users[1].name === "bill") {
  console.log("do we have a bill ?");
} else {
  console.log("gui and bill are missing ...");
}

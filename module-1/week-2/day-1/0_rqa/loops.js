const colors = [
  "blue",
  "yellow",
  "red",
  "white",
  "green",
  "purple",
  "black"
];


// use for loop to parse and display colors values
function findColorOccurencesCount(list, color) {
  var counter = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === color) counter += 1;
  }
  return counter;
}

const res1 = findColorOccurencesCount(colors, "yellow");
console.log(res1);
const res2 = findColorOccurencesCount(colors, "blue")
console.log(res2);

// use while loop to parse and display colors values
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

console.log("----forEach----");

// use foreEach loop to parse and display colors values
colors.forEach(element => console.log(element));

console.log("----for in----");

const user = {
    name: "bill",
    lastname: "bascora",
    age: 35,
    email: "bill-b@gmail.com",
    hobbies: ["food", "sleep", "run"],
    children: [{ name: "jane", age: 13 }, { name: "joe", age: 7 }]
  };
  

// use for...in loop to parse user
for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(key);
        console.log(user[key]);
        if (key === "children") {
            user[key].forEach(kid => {
                console.log(`${kid.name} is ${kid.age} years old`);
            })
        }
    }
}

// use Array.filter to keep only colors value that are less than 4 chars
const filteredColors = colors.filter(color => color.length <= 4);
console.log("filtered colors => ", filteredColors);

// use Array.map to create a new array containing all colors values in uppercase
const uppercasedColors = colors.map(color => color.toUpperCase())
console.log("uppercased colors => ", uppercasedColors);

// use Array.reduce to get the sum of all colors values length
const sumOfColorChars = colors.reduce((acc, currVal, i) => {
    return acc + currVal.length;
}, 0);

console.log("sum  of colors chars length => ", sumOfColorChars);
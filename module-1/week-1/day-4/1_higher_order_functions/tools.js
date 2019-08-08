// https://en.wikipedia.org/wiki/Higher-order_function
// ▶ sudo npm i -g nodemon
// foreach
const fruits = ["mango", "banana", "peach", "apple", "orange", "grappe"];

// fruits.forEach(function(f, i) {
//   console.log(f);
// });

fruits.forEach((f, i) => {
  console.log(`${i} -> ${f}`);
  if (i === 5) fruits[i] = "pineapple";
});

console.log(fruits);


// filter

// const favoriteFruits = fruits.filter(f => {
//   return f === "mango" || f === "banana";
// });

const favoriteFruits = fruits.filter(f => f === "mango" || f === "banana");


console.log("----filtered----");
console.log(favoriteFruits);

// map
// const uppercasedFruits = fruits.map((f) => {
//     return f.toLocaleUpperCase();
// });

const uppercasedFruits = fruits.map((f) => f.toLocaleUpperCase());

const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((n) => {
//     return n * 2;
// });

const doubledNumbers = numbers.map((n) => n * 2);

const tripler = n => n * 3;

const tripledNumbers = numbers.map(tripler);

console.log("----mapped----");
console.log(uppercasedFruits);
console.log(doubledNumbers);


// reduce

const sum = numbers.reduce((accumulator, currentValue, i) => {
    return accumulator += currentValue;
}, 0);

console.log("----sum----");
console.log(sum);


// sort

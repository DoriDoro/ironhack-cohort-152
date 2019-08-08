function sayHello(who) {
  if (who) console.log(`hello  ${who} !`);
  else console.log(`hello !`);
  return;
}

var result = sayHello("Antonin");
// sayHello("Alex");
// sayHello("Julie");
// sayHello("Aida");
// sayHello();
console.log("res => ", result);

function sum(a, b) {
    return Number(a) + Number(b);
}

function substract(a, b) {
    return Number(a) - Number(b);
}

function divide(a, b) { return Number(a) / Number(b)}

console.log(sum(10, 20));
console.log(sum(10, "90"));

console.log(sayHello("Doro"));

const operations = {
    sum: sum,
    substract: substract,
    divide: divide
};

console.log(operations.divide(10, 3));

function a(clbk) {
    return "i'm a " + clbk();
}

function b() {
    return "i'm b";
}

console.log(a(b));



var tas = ["abie", "frank", "mimi", "jules", "clara", "cassandre"];
var friends = ["jill", "max", "silvia", "foo"];

/**
 * should return true if jules is found in the list, false otherwise
 */
function findJules(list) {
    var res = false;

    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === "jules") {
            res = true;
            break;
        }
    }
    
    return res;
}

console.log(findJules(tas));
// findJules(friends);



// CONSTANTS
const x = 1;
// x = 0; will throw an error (cannot reassign)
const musicInstruments = ["guitar", "drum machine", "piano", "banjo"];
// musicInstruments = []; will throw an error  (cannot reassign)
musicInstruments.push("violin");
// musicInstruments.splice(0, 1);
console.log(musicInstruments);

// FAT ARROWS FUNCTIONS
console.log("-----------FOR------------------");

for (let i = 0; i < musicInstruments.length; i++) {
    console.log(musicInstruments[i]);
}

console.log("-------------FOR OF----------------");

for (let instrument of musicInstruments) {
    console.log(instrument);
}

console.log("--------------FOREACH---------------");

musicInstruments.forEach(function (val, i) {
    console.log(val);
});

console.log("--------------FOREACH SHORTEST---------------");

musicInstruments.forEach((val, i) => console.log(val));



// console.log(process.argv)

// you must remove 2 first indexes

console.log(process.argv.reduce((acc, curr, index) => {
    if (index >= 2) acc += Number(curr);
    return acc;
}, 0));

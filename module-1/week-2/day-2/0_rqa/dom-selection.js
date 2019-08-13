const nav = document.getElementById("nav_main");
const inputs = document.querySelectorAll("#data_watcher input");
const oddInputs = document.querySelectorAll("#data_watcher input:nth-child(odd)");
const bodysChildren1 = document.querySelectorAll("body *");
const bodysChildren2 = document.querySelector("body").children;
const activeNavLink = document.querySelector("#nav_main .is-active");

console.log(oddInputs);


document.getElementById("nav_main").onmouseenter = (e) => console.log(e);



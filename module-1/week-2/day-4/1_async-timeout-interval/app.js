import users from "./data.js";
import { products } from "./data.js";

console.log(users, products);

// dom elements
const btnCreate = document.getElementById("btn_create_block");
const btnCreateOverTime = document.getElementById("btn_create_block_overtime");
const btnStop = document.getElementById("btn_stop_interval");
const container = document.getElementById("container");
// timing
var intervalID;

function createBlock(e) {
  var text = "js <3";
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);

  setTimeout(function() {
    box.innerText = text;
  }, 1000);
}

function stopBlockCreation() {
  window.clearInterval(intervalID);
}

function createBlocksOverTime() {
  intervalID = setInterval(createBlock, 1000);
}

btnCreate.onclick = createBlock;
btnCreateOverTime.onclick = createBlocksOverTime;
btnStop.onclick = stopBlockCreation;


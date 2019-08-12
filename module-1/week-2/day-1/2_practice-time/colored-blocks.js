const btnCreate = document.getElementById("btn_create"); // the create button
const btnReset = document.getElementById("btn_reset"); // the reset button
const blocks = document.getElementById("blocks"); // the div containing all the blocks
const inputColor = document.getElementById("input_color");
const inputBlocksCount = document.getElementById("input_blocks_count");

function createBlock() {
  const newBlock = document.createElement("div"); // creates a new div
  newBlock.className = "block"; // adds a CSS class on the newly created div
  newBlock.style.background = inputColor.value || "#BADA55";
  return newBlock; // mandatory here : return the newly created block !!!
}

function appendBlock(block) {
  blocks.appendChild(block); // appendChild adds a new child Elemend on any targeted parent
  // blocks here, is the parent !
}

function handleCreate() {
  // handleCreate() is executed every time a user clicks on the create button each time a user clicks
  const nbBlocks = inputBlocksCount.value;
  // value comes from the document, everything in the doc is a string (HTML)
  // console.log(typeof nbBlocks); // will alway be of type string !!!

  // step 1 => create a loop that will iterate nbBlocks times
  console.log(`I want to create ${nbBlocks} blocks`);

  for (let i = 0; i < nbBlocks; i += 1) {
    // step 2 => we'll get a fresh new block on each function call
    const block = createBlock();
    // step 3 => we now have the div, so let's add it to the document
    appendBlock(block);
  }
}

function handleReset() {
    blocks.innerHTML = `<ul><li>${1 + 1}</li><ul>`;
}

btnCreate.onclick = handleCreate;
btnReset.onclick = handleReset;

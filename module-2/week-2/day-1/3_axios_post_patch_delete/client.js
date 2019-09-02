import apiHandler from "./apiHandlers.js";
// "extension is mandatory here (ouside frameworks like express, react, vue, etc")

///////////
// DOM Elements selection
const form = document.getElementById("form_product");
const userInput = form.querySelector("input");
// const getBtn = document.getElementById("get_product");
const boardProducts = document.getElementById("products");

///////////
// Functions declaration

function handleBoardBtnsClick(evt) {
  // evt listener on table#board
  // let's use event delegation here : the parent form catches click events on children buttons
  // check@mdn : Event.bubbles
  // console.log("clicked html element =>", evt.target);
  const btn = evt.target; // clicked button, here either .delete OR .edit

  // preparing the data for apiHandler
  const id = btn.getAttribute("data-id");

  if (!id) return; // the end-user didn't click a button, nothing to do ... return

  // little logic below ...
  const mode = btn.classList.contains("edit") ? "update" : "destroy";
  if (mode === "update") {
    // if update mode, we need to update the name
    apiHandler.update(resetBoard, { id, name: userInput.value });
  } else if (mode === "destroy") {
    // else, let's destroy one record in fake-db
    apiHandler.destroy(resetBoard, id);
  }
}

function resetBoard() {
  apiHandler.read(renderProducts);
  userInput.value = getRandomValue();
}

//////////
// DOM Manipulation
/**
 * @callback
 */
function renderProducts(data) {
  // with AJAX method(s), we'll need to handle the DOM rendering in client's script
  // possible options: vanilla js or js frameworks (react, angular, vue, etc.)
  boardProducts.innerHTML = "<tbody>"; // reset board's content
  var html = "";
  data.forEach(obj => {
    // for each product object
    if (!obj.id) throw new Error("need product id property set");
    html += "<tr>"; // open tr tag
    for (let prop in obj) {
      // for each current product's property
      html += `<td>${obj[prop]}</td>`;
    }
    html += `<td class="delete" data-id="${obj.id}"><span>x</span></td>`;
    html += `<td class="edit" data-id="${obj.id}"><span>e</span></td>`;
    html += "</tr>"; // close tr tag
  });
  boardProducts.innerHTML += html + "</tbody>";
}

///////////
// UTILS

const getRandomValue = () =>
  ["foo", "bar", "baz"][Math.floor(Math.random() * 3)];

///////////
// DOM Events listeners => to API Calls
window.onload = resetBoard;

form.onsubmit = evt => {
  evt.preventDefault(); // prevent HTML form element to reload page
  apiHandler.create(resetBoard, { name: userInput.value });
};

boardProducts.onclick = handleBoardBtnsClick; // check @utils, end of this file

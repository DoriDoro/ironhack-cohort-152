const searchBox = document.getElementById("search_category_input");
const formInput = document.getElementById("cat_name");
const addBtn = document.getElementById("btn_create_category");
const board = document.querySelector("#board_category .body");
const url = document.getElementById("site_url").content + "/api/category";

function appendCategoryToDOM(name, id) {
  function render(strings, value) {
    return `
        <tr class="row" id="cat_${id}">
            <td class="cell cat-name">${value}</td>
            <td class="cell">
                <button class="btn edit" data-category-id="${id}">e</button>
            </td>
            <td class="cell">
                <button class="btn delete" data-category-id="${id}">X</button>
            </td>
        </tr>`;
  }
  const renderedHTML = render`${name} ${id}`;
  const tempWrap = document.createElement("template");
  tempWrap.innerHTML = renderedHTML;
  const node = tempWrap.content.childNodes[1];
  node.querySelector(".btn.delete").onclick = removeCategoryViaAJAX;
  node.querySelector(".btn.edit").onclick = editCategory;
  board.appendChild(node);
}

function editCategory(evt) {
  const btn = evt.target;
  const id = btn.getAttribute("data-category-id");
  const nameElement = document
    .getElementById(`cat_${id}`)
    .querySelector(".cat-name");

  nameElement.classList.add("is-editing");
  nameElement.setAttribute("contenteditable", true);
  nameElement.focus();

  nameElement.oninput = () => {
    if (nameElement.textContent.length > 20) {
      nameElement.classList.remove("green-bg");
      nameElement.classList.add("red-bg");
    } else {
      nameElement.classList.add("green-bg");
      nameElement.classList.remove("red-bg");
    }
  };
  nameElement.onblur = () => {
    nameElement.classList.remove("is-editing");
    nameElement.classList.remove("green-bg");
    nameElement.classList.remove("red-bg");
    nameElement.setAttribute("contenteditable", false);
    editCategoryViaAJAX(nameElement.textContent, id);
  };
}

function displayMessage(txt, status) {
  console.log(txt, status);
}

function removeCategoryFromDOM(id) {
  document.getElementById(`cat_${id}`).remove();
}

function getCategoriesViaAJAX(evt) {
  axios
    .get(`${url}/all`)
    .then(serverRes => {
      serverRes.data.forEach(cat => {
        appendCategoryToDOM(cat.name, cat._id);
      });
    })
    .catch(err => console.log(err));
}

function addCategoryViaAJAX(evt) {
  const dataToPost = formInput.value;

  if (!dataToPost) return console.log("no cat name provided :(");

  axios
    .post(`${url}/create`, { name: dataToPost })
    .then(serverRes => {
      console.log(serverRes);
      if (serverRes.data.errors) {
        const errMessage = serverRes.data.errors.name.message;
        return displayMessage(errMessage, "error");
      } else {
        displayMessage(
          "Yay ! Category successfully created !",
          "success"
        );
        appendCategoryToDOM(dataToPost, serverRes.data._id);
      }
    })
    .catch(err => console.log(err));
}

function editCategoryViaAJAX(catName, id) {
  axios
    .patch(`${url}/${id}`, { name: catName })
    .then(serverRes => {
      console.log(serverRes);
      if (serverRes.data.errors) {
        const errMessage = serverRes.data.errors.name.message;
        console.log(errMessage)
        return displayMessage(errMessage, "error");
      } else {
        displayMessage("Yay ! Category successfully edited !", "success");
      }
    })
    .catch(err => console.log(err));
}

function removeCategoryViaAJAX(evt) {
  const btn = evt.target;
  const id = btn.getAttribute("data-category-id");
  axios
    .delete(`${url}/${id}`)
    .then(serverRes => removeCategoryFromDOM(id))
    .catch(serverErr => console.log(serverErr));
}

window.addEventListener("DOMContentLoaded", getCategoriesViaAJAX);
addBtn.onclick = addCategoryViaAJAX;

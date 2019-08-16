const items = document.querySelectorAll(".item");
const input = document.getElementById("user_input");

const button = document.getElementById("create_btn");

const list = document.getElementById("my_list");

function handleClicks(evt) {
  const target = evt.target || evt.srcElement;
  evt.target.classList.toggle("is-active");
}

for (let i = 0; i < items.length; i++) {
  items[i].onclick = handleClicks;
}

function createLi() {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = input.value;
  li.onclick = handleClicks;
  list.appendChild(li);
}

function createLi2() {
  if (!input.value) return;
  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
}

button.onclick = createLi2;

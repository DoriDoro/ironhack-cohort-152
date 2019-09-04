const url = "http://localhost:8888/products";
const list = document.getElementById("list_products");

function getSomeDataViaAJAX() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onload = evt => displayData(JSON.parse(evt.target.response));
  xhr.send();
}

function getSomeDataViaAJAX2() {
  axios
    .get(url)
    .then(APIres => {
      displayData(APIres.data);
    })
    .catch(APIErr => {
      console.error(APIErr);
    });
}

function deleteDataViaAJAX(id, clbk) {
  //   console.log(clbk);
  //   console.log("deleteDataViaAJAX started");
  axios
    .delete(url + "/" + id)
    .then(APIRes => clbk(APIRes))
    .catch(APIErr => console.error(APIErr));
  //   console.log("deleteDataViaAJAX ended");
}

function deleteProduct(evt) {
  const btn = evt.target;
  const id = btn.getAttribute("data-product-id");
  const x = deleteDataViaAJAX(id, function(apiREs) {
    console.log(apiREs);
    btn.parentElement.remove();
  });
  console.log("x ====", x); // x will allways be undefined here.... no way to get the data back with a simple return statement since deleteDataViaAJAX is an asynchronous process ...
}

// technique 1 (create element as objects )
// ------------

function displayData(products) {
  products.forEach(product => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.className = "product";
    li.textContent = product.name + " | " + product.price;

    btn.textContent = "delete";
    btn.className = "button";
    btn.setAttribute("data-product-id", product.id);
    btn.onclick = deleteProduct;

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// technique 2 (create element as strings )
// ------------

// function displayData(products) {
//   list.innerHTML = "";
//     console.log(products)
//   products.forEach(product => {
//     list.innerHTML += `
//         <li class="product">
//             ${product.name} | ${product.price}
//         </li>`;
//   });

//   list.querySelectorAll(".product").forEach(product => {
//     product.onclick = handleClick;
//   });
// }

document.getElementById("btn_get_products").onclick = function() {
  //   getSomeDataViaAJAX();
  getSomeDataViaAJAX2();
};

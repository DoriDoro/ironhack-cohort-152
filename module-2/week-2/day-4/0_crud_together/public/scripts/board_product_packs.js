const btnPriceUp = document.querySelector("#price_widget .fa-caret-up");
const btnPriceDown = document.querySelector("#price_widget .fa-caret-down");
const inputPrice = document.getElementById("new_pack_price"); // hidden input
const display = document.getElementById("pack_price_display");
const formBtn = document.getElementById("btn_create_pack");
const btnsRemoveProduct = document.querySelectorAll(".btn.remove");

function setPackPrice(fx) {
    let currentPrice = Number(inputPrice.value);
    if(fx === "add") currentPrice += 1;
    else currentPrice = currentPrice - 1 > 0 ? currentPrice - 1 : 0;
    inputPrice.value = currentPrice;
    display.textContent = currentPrice;
}

// event handler, remove hidden input and board row for removed product
function removeProductFromPack(evt) {
  if (document.querySelectorAll(".body .row").length === 2) {
    return console.warn("A pack must contain at least 2 products.");
  }
  const btn = evt.target;
  const id = btn.getAttribute("data-id-product");
  const row = document.getElementById(`product_${id}`);
  const inputHidden = document.querySelector(`[value='${id}']`);
  row.remove();
  inputHidden.remove();
}

// event handler, change price's hidden input value according to contenteditable element's textcontent
display.oninput = (evt) => new_pack_price.value = evt.target.textContent;

// event listener, wait for clicks to remove products from pack
btnsRemoveProduct.forEach(btn => {
  btn.onclick = removeProductFromPack;
});

// event listener, wait for clicks to  change pack's price
[btnPriceUp, btnPriceDown].forEach(btn => {
  btn.onclick = function(evt) {
    const btn = evt.target;
    setPackPrice(btn.classList.contains("fa-caret-up") ? "add" : "sub");
  };
});

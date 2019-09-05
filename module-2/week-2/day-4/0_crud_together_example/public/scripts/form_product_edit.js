const btn = document.getElementById("show_edit_product_form");
const infos = document.getElementById("product_infos");
const wrap = document.getElementById("wrap_form_edit_product");

btn.onclick = function() {
    infos.classList.toggle("is-hidden");
    wrap.classList.toggle("is-hidden");
    btn.textContent = infos.classList.contains("is-hidden") ? "view" : "edit";
}
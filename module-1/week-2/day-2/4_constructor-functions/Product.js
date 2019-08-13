function Product(infos) {
    this.name = infos.name;
    this.brand = infos.brand;
    this.price = infos.price;
    this.ref = infos.ref;
}

Product.prototype.updatePrice = function(newPrice) {
    this.price = newPrice;
};


const skateboard = new Product({
    name: "8 model board",
    price: 100,
    brand: "Zero",
    ref: "SKATE1000__TDGQKDBDK"
});

const muffin = new Product({
    name: "chocolate muffin",
    price: 3,
    brand: "Muffin Factory",
    ref: "000MUFFMUFF"
});

console.log(skateboard.price);
skateboard.updatePrice(80);

console.log(skateboard);
console.log(muffin);
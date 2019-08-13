class Product {
    constructor(infos) {
        this.name = infos.name;
        this.brand = infos.brand;
        this.price = infos.price;
        this.ref = infos.ref;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    };

    getFullProductInfos() {
        return `${this.name} by "${this.brand}" (${this.ref}) cost ${this.price} euros.`;
    }
}

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

console.log(skateboard.getFullProductInfos());
console.log(muffin.getFullProductInfos());
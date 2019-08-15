class Donut { // a class is a way to generate objects having the same general structure (properties and methods)
    constructor(b, f, p, r) {
        this.brand = b; // this represents the currently built object
        this.flavor = f;
        this.price = p;
        this.stock = 0;
        this.ref = r;
        // return this; // this is returned by default by the constructor, no need to write it
    }

    addStock(nb) {
        this.stock += nb || 1;
        return this.stock;
    }

    addStockLater(nb) {
        console.log(this);
        setTimeout(() => {
            console.log("yahaaa", this)
        }, 2000);
        // this.stock += nb || 1;
        // return this.stock;
    }

    getFlavor() {
        return `this awesome donut is ${this.flavor} flavored`;
    }

    setFlavor(f) {
        this.flavor = f;
    }
}

const d1 = new Donut("Dunkin", "Chocolate", 2, "DDN1200-2019");
const d2 = new Donut("Dunkin", "Fudge", 3.5, "DDN1210-2019");
d1.addStockLater(100);
d1.setFlavor("Chocolate-Fudge")

console.log(d1);

// d1.addStock(20);
// console.log(d1.stock);
// console.log(d2.getFlavor());


// function DonutOldSchool(f) {
//     this.flavor = f;
// }

// DonutOldSchool.prototype.getFlavor = function() {
//     return `this awesome donut is ${this.flavor} flavored`;
// }

// const d3 = new DonutOldSchool("blueberry");
// console.log(d3.getFlavor());

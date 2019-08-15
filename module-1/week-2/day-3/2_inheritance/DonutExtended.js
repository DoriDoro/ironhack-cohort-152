
class Product {
    constructor(b, p, r) {
        this.brand = b; // this represents the currently built object
        this.price = p;
        this.ref = r;
        this.stock = 0;
        // return this; // this is returned by default by the constructor, no need to write it
    }

    addStock(nb) {
        this.stock += nb || 1;
        return this.stock;
    }

    foo() {
        return "bar";
    }
}

class Tshirt extends Product {
    constructor(b, s, p, r) {
        super(b, p, r);
        this.size = s;
    }
    foo() {
        return super.foo() + " baz"
    }
}


const tshirt1 = new Tshirt("LRG", "L", 35, "KEWLTSHIRT1");
tshirt1.addStock(10);
console.log(tshirt1.foo());

class Donut extends Product {
    constructor(b, f, p, r) {
        super(b, p, r);
        this.flavor = f;
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
console.log(d1);

// d1.setFlavor("Chocolate-Fudge")

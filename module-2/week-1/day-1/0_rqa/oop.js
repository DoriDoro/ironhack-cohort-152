class Foo {
    constructor() {
        this.name = "i'm a lonesome construct";
        this.farAwayFromHome = true;
    }

    bar() {
        return 23;
    }
}


const a = new Foo();
const b = a.bar();
console.log(typeof b); // ????
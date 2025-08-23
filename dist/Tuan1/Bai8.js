"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price;
    }
}
const arrProduct = [new Product("Gao", 1000), new Product("Sua", 50), new Product("Ga", 150)];
const filter = arrProduct.filter((t) => t.price > 100);
console.log("List product price than 100 ", filter);
//# sourceMappingURL=Bai8.js.map
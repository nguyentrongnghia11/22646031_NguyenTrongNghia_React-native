"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
    }
    showProducts() {
        this.products.forEach(p => {
            console.log(`${p.name} x${p.quantity} = ${p.price * p.quantity}`);
        });
    }
}
const order = new Order();
order.addProduct({ name: "Laptop", price: 1000, quantity: 1 });
order.addProduct({ name: "Mouse", price: 50, quantity: 2 });
console.log("Total Price:", order.calculateTotal());

type Product = {
  name: string;
  price: number;
  quantity: number;
};

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  showProducts(): void {
    this.products.forEach(p => {
      console.log(`${p.name} x${p.quantity} = ${p.price * p.quantity}`);
    });
  }
}

const order = new Order();
order.addProduct({ name: "Laptop", price: 1000, quantity: 1 });
order.addProduct({ name: "Mouse", price: 50, quantity: 2 });

console.log("Total Price:", order.calculateTotal());

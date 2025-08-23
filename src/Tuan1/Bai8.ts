class Product {

    
    name: string;
    price: number
    constructor (name: string, price: number) {
        this.name = name,
        this.price = price
    }
}


const arrProduct = [new Product ("Gao", 1000), new Product ("Sua", 50), new Product("Ga", 150)]


const filter = arrProduct.filter((t) => t.price > 100)

console.log ("List product price than 100 ", filter)
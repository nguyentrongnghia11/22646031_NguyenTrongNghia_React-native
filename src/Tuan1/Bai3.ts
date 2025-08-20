// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    brand: string;
    model: string;
    year: number;
    
     showCar() {
    console.log("Information of car : ", this.brand + " " + this.model + " " + this.year)

}

constructor(brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model,
        this.year = year
}
    
}


const car = new Car("Mecedes", "C300", 2000)

car.showCar()


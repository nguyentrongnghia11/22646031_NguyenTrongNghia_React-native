"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    showCar() {
        console.log("Information of car : ", this.brand + " " + this.model + " " + this.year);
    }
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model,
            this.year = year;
    }
}
const car = new Car("Mecedes", "C300", 2000);
car.showCar();

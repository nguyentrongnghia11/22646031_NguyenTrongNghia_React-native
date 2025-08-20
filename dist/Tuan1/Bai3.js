"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    constructor(brand, model, year) {
        this.brand = brand,
            this.model = model,
            this.year = year;
    }
}
function showCar(car) {
    console.log("Information of car : ", JSON.stringify(car));
}
const car = new Car("Mecedes", "C300", 2000);
showCar(car);
//# sourceMappingURL=Bai3.js.map
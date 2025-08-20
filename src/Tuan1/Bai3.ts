// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    brand: string;
    model: string;
    year: number

    constructor (brand: string, model: string, year: number) {
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    
}

 function showCar (car: Car) {
    console.log ("Information of car : ", JSON.stringify(car))

}

const car = new Car("Mecedes", "C300", 2000)

showCar (car)
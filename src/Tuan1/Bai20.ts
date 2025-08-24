interface Vehicle {
    brand: string;
    speed: number;

    start(): void;

}

class Car implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(`${this.brand} car is starting...`);
    }
}

class Bike implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(`${this.brand} bike is starting...`);
    }


}

const car: Vehicle = new Car("Toyota", 120);
const bike: Vehicle = new Bike("Yamaha", 80);

car.start();

bike.start();

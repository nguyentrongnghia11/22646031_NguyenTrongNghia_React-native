"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    start() {
        console.log(`${this.brand} car is starting...`);
    }
}
class Bike {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    start() {
        console.log(`${this.brand} bike is starting...`);
    }
}
const car = new Car("Toyota", 120);
const bike = new Bike("Yamaha", 80);
car.start();
bike.start();

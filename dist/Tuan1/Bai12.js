"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        return `${this.name} is flying high in the sky!`;
    }
    chirp() {
        return "Chirp! Chirp!";
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        return `${this.name} is swimming gracefully in water!`;
    }
    bubble() {
        return "Blub! Blub!";
    }
}
class Duck {
    constructor(name) {
        this.name = name;
    }
    fly() {
        return `${this.name} is flying short distances!`;
    }
    swim() {
        return `${this.name} is swimming in the pond!`;
    }
    quack() {
        return "Quack! Quack!";
    }
}
const sparrow = new Bird("Sparrow");
const goldfish = new Fish("Goldfish");
const donald = new Duck("Donald");
console.log(sparrow.fly());
console.log(goldfish.swim());
console.log(donald.fly());
console.log(donald.swim());
console.log(donald.quack());
//# sourceMappingURL=Bai12.js.map
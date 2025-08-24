"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Gau gau gau";
    }
}
const dog = new Dog("Huslang");
console.log(dog.sound());

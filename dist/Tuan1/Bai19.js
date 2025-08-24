"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow~");
    }
}
class Cow extends Animal {
    makeSound() {
        console.log("Moo~");
    }
}
const animals = [new Dog(), new Cat(), new Cow()];
animals.forEach((animal) => {
    animal.makeSound();
});

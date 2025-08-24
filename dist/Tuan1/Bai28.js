"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Some generic animal sound...");
    }
    speak() {
        this.makeSound();
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
const dog = new Dog();
dog.speak();
const cat = new Cat();
cat.speak();

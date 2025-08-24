"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
}
const person = new Person("Nguyen Trong Nghia", 21);
// console.log (person)
exports.default = Person;

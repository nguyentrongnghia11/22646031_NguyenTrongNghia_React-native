"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai1_1 = require("./Bai1");
class Student extends Bai1_1.default {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
const student = new Student("Nguyen Trong Nghia", 21, "DHKTPM18A");
console.log(student);

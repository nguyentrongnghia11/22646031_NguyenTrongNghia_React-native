"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    introduce() {
        console.log(`I'm student ${this.name}, ${this.age} years old, grade: ${this.grade}.`);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`I'm teacher ${this.name}, I teach ${this.subject}.`);
    }
}
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("=== School Information ===");
        console.log("Students:");
        this.students.forEach((s) => s.introduce());
        console.log("Teachers:");
        this.teachers.forEach((t) => t.introduce());
    }
}
const school = new School();
school.addStudent(new Student("Trong Nghia", 15, "10"));
school.addStudent(new Student("Hong Hia", 16, "11"));
school.addTeacher(new Teacher("Ronaldo", 40, "Football"));
school.addTeacher(new Teacher("Messi", 35, "Football"));
school.displayInfo();

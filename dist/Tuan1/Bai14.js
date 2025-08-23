"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Manager extends Employee {
    constructor(name, age, teamSize) {
        super(name, age);
        this.teamSize = teamSize;
    }
}
class Developer extends Employee {
    constructor(name, age, programmingLanguage) {
        super(name, age);
        this.programmingLanguage = programmingLanguage;
    }
}
const manager = new Manager("Nghia", 35, 8);
const developer = new Developer("Trong", 28, "TypeScript");
console.log(manager);
console.log(developer);
//# sourceMappingURL=Bai14.js.map
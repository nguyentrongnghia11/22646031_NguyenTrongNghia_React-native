class Employee {
    constructor(public name: string, public age: number) { }
}

class Manager extends Employee {
    constructor(name: string, age: number, public teamSize: number) {
        super(name, age);
    }
}

class Developer extends Employee {
    constructor(name: string, age: number, public programmingLanguage: string) {
        super(name, age);
    }
}

const manager = new Manager("Nghia", 35, 8);
const developer = new Developer("Trong", 28, "TypeScript");

console.log(manager); 
console.log(developer); 
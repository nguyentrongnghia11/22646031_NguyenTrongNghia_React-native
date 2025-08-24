class Person {
    constructor(public name: string, public age: number) { }
    introduce(): void {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }

    introduce(): void {
        console.log(`I'm student ${this.name}, ${this.age} years old, grade: ${this.grade}.`);
    }
}

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    introduce(): void {
        console.log(`I'm teacher ${this.name}, I teach ${this.subject}.`);
    }
}

class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
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

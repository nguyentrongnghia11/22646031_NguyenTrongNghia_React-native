class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
}

class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(
            `Hello, I'm ${this.name}, ${this.age} years old, and I teach ${this.subject}.`
        );
    }
}


const teacher = new Teacher("Alice", 35, "Mathematics");
teacher.introduce();

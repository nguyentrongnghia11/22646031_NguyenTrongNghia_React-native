
import Person from "./Bai1";
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade

    }

}

const student = new Student("Nguyen Trong Nghia", 21, "DHKTPM18A")

console.log(student)
interface Animal {
    name: string;
    sound(): string;
}

class Dog implements Animal {
    constructor(public name: string) {

    }
    sound(): string {
        return "Gau gau gau"
    }
}


const dog: Dog = new Dog("Huslang")

console.log(dog.sound())
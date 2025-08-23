
interface Flyable {
    fly(): string;
    altitude?: number; 
}


interface Swimmable {
    swim(): string;
    depth?: number; 
}


class Bird implements Flyable {
    constructor(public name: string) {}
    
    fly(): string {
        return `${this.name} is flying high in the sky!`;
    }


    chirp(): string {
        return "Chirp! Chirp!";
    }
}

class Fish implements Swimmable {
    constructor(public name: string) {}
    
    swim(): string {
        return `${this.name} is swimming gracefully in water!`;
    }
    
    bubble(): string {
        return "Blub! Blub!";
    }
}


class Duck implements Flyable, Swimmable {
    constructor(public name: string) {}
    
    fly(): string {
        return `${this.name} is flying short distances!`;
    }
    
    swim(): string {
        return `${this.name} is swimming in the pond!`;
    }
    

    quack(): string {
        return "Quack! Quack!";
    }
}

const sparrow = new Bird("Sparrow");
const goldfish = new Fish("Goldfish");
const donald = new Duck("Donald");

console.log(sparrow.fly()); 
console.log(goldfish.swim());

console.log(donald.fly()); 
console.log(donald.swim());
console.log(donald.quack());
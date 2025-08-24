class Animal {
    protected makeSound(): void {
        console.log("Some generic animal sound...");
    }

    public speak(): void {
        this.makeSound();
    }
}

class Dog extends Animal {
    protected makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    protected makeSound(): void {
        console.log("Meow! Meow!");
    }
}

const dog = new Dog();
dog.speak();

const cat = new Cat();
cat.speak();

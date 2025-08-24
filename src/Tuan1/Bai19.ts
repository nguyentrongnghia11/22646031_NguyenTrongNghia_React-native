class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow~");
  }
}

class Cow extends Animal {
  makeSound(): void {
    console.log("Moo~");
  }
}

const animals: Animal[] = [new Dog(), new Cat(), new Cow()];

animals.forEach((animal) => {
  animal.makeSound();
});

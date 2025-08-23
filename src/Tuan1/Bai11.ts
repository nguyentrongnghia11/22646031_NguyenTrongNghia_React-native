// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
interface Animal {
    bark() : string;
    meow(): string;
}

class Dog implements Animal {
   constructor () {}
    bark(): string {
        return "Gau gau gau"
    }
    meow(): string {
        return "meo meo meo"
    }
}


class Meo implements Animal {
   constructor () {}
    bark(): string {
        return "Gau gau gau"
    }
    meow(): string {
        return "meo meo meo"
    }
}

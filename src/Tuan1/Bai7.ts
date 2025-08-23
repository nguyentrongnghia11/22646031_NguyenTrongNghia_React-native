class User {
    private name: string;
    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }
}


const user = new User("Nguyen Trong Nghia")
console.log(user.getName())

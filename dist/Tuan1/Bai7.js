"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const user = new User("Nguyen Trong Nghia");
console.log(user.getName());
//# sourceMappingURL=Bai7.js.map
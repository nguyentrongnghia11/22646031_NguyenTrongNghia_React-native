"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const stringRepo = new Repository();
stringRepo.add("Apple");
stringRepo.add("Banana");
console.log(stringRepo.getAll());

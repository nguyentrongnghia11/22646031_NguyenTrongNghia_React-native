"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(store = []) {
        this.store = store;
    }
}
const box = new Box();
box.store.push(1, 2, 3);
console.log(box.store);

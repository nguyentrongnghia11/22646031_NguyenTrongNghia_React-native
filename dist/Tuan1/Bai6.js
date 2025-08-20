"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, year) {
        this.title = title,
            this.author = author,
            this.year = year;
    }
}
const book = new Book("Conan", "ABC", 1998);
const b = JSON.stringify(book);
console.log(`Book : ${b}`);
//# sourceMappingURL=Bai6.js.map
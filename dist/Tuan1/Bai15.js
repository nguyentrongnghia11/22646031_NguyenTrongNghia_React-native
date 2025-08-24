"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Định nghĩa lớp Book
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class User {
    constructor(name, userId) {
        this.name = name;
        this.userId = userId;
    }
}
// Lớp Library quản lý Book và User
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
}
const library = new Library();
const book1 = new Book("Sách 1", "Tác giả A");
const book2 = new Book("Sách 2", "Tác giả B");
library.addBook(book1);
library.addBook(book2);
const user1 = new User("Người dùng 1", "ID-001");
const user2 = new User("Người dùng 2", "ID-002");
library.addUser(user1);
library.addUser(user2);
console.log("Add success");

// Định nghĩa lớp Book
class Book {
    constructor(
        public title: string,
        public author: string
    ) { }
}


class User {
    constructor(
        public name: string,
        public userId: string
    ) { }
}

// Lớp Library quản lý Book và User
class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addUser(user: User): void {
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

console.log  ("Add success")


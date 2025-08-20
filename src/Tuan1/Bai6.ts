class Book {
    constructor(title: string, author: string, year: number) {
        this.title = title,
            this.author = author,
            this.year = year

    }
    title: string;
    author: string;
    year: number;   
}

const book: Book = new Book ("Conan", "ABC", 1998)
const b = JSON.stringify(book)

console.log (`Book : ${b}`)



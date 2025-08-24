class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const stringRepo = new Repository<string>();
stringRepo.add("Apple");
stringRepo.add("Banana");
console.log(stringRepo.getAll()); 

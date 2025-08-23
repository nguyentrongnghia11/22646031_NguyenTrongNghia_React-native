class Box<T> {
    constructor(public store: T[] = []) {

    }
}

const box: Box<Number> = new Box();
box.store.push(1, 2, 3)
console.log(box.store)

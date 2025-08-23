"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const square = new Square(5);
const circle = new Circle(3);
console.log(square.area());
console.log(circle.area());
//# sourceMappingURL=Bai13.js.map
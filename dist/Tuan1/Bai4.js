"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    area_and_perimeter() {
        console.log("area of rectangle: ", (this.height + this.width) * 2);
        console.log("perimeter of rectangle: ", this.height * this.width);
    }
    constructor(width, height) {
        this.width = width,
            this.height = height;
    }
}
let height = 10;
let width = 20;
const rectangle = new Rectangle(height, width);
rectangle.area_and_perimeter();
//# sourceMappingURL=Bai4.js.map
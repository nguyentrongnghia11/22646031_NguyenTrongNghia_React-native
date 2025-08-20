"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width,
            this.height = height;
    }
}
function area_and_perimeter(rectangle) {
    console.log("area of rectangle: ", (rectangle.height + rectangle.width) * 2);
    console.log("perimeter of rectangle: ", rectangle.height * rectangle.width);
}
let height = 10;
let width = 20;
const rectangle = new Rectangle(height, width);
area_and_perimeter(rectangle);
//# sourceMappingURL=Bai4.js.map
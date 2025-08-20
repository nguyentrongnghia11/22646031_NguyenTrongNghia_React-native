class Rectangle {
    width: number;
    height: number

    constructor(width: number, height: number) {
        this.width = width,
            this.height = height
    }


}

function area_and_perimeter(rectangle: Rectangle) {

    console.log("area of rectangle: ", (rectangle.height + rectangle.width) * 2)

    console.log("perimeter of rectangle: ", rectangle.height * rectangle.width)
}

let height = 10;
let width = 20

const rectangle: Rectangle = new Rectangle(height, width)

area_and_perimeter(rectangle)
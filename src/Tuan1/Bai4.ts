class Rectangle {
    width: number;
    height: number;
    area_and_perimeter() {
    console.log("area of rectangle: ", (this.height + this.width) * 2)

    console.log("perimeter of rectangle: ", this.height * this.width)
}


    constructor(width: number, height: number) {
        this.width = width,
            this.height = height
    }


}


let height = 10;
let width = 20

const rectangle: Rectangle = new Rectangle(height, width)

rectangle.area_and_perimeter()
//The base class that allows me to only add what's needed for the other shapes. allowing for code reduction, and less to no redundancy
class Shape {
    constructor(text, textColor, shapeColor) {
        (this.text = text),
        (this.textColor = textColor),
        (this.shapeColor = shapeColor);
    }
}


// the class that set's up the triangle shape. it pulls from the main shape class
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}


// the classs that sets up the circle shape, also pulling from the main shape class
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}


// the class that sets up the square class, also pulling from the main shape class
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}


// allows for this file to be used with other files
module.exports = { Triangle, Circle, Square };
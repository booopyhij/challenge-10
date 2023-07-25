//The base class that allows me to only add what's needed for the other shapes. allowing for code reduction, and less to no redundancy
class Shape {
    constructor(text, textColor, shapeColor) {
        (this.text = text),
        (this.textColor = textColor),
        (this.shapeColor = shapeColor);
    }
//     setColor(shapeColor) {
//         this.shapeColor = 
//       }
 }


// the class that set's up the triangle shape. it pulls from the main shape class
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `

        <polygon fill="${this.shapeColor}" points="0 0, 100 100, 0 100"/>
      
        
      
      `
    }
}


// the classs that sets up the circle shape, also pulling from the main shape class
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `

        <circle fill="${this.shapeColor}" cx="50" cy="50" r="50" />
      
        
      
      `
    }
}


// the class that sets up the square class, also pulling from the main shape class
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `

        <rect fill="${this.shapeColor}" width="100" height="100" />
      
        
      `
    }
}


// allows for this file to be used with other files
module.exports = { Triangle, Circle, Square };
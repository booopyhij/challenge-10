//creates the class to make the svg
class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
    this.shapeColor = '';
  }
  //renders the svg
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }
  //renders the text and text color
  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }
  //renders the shape
  setShape(shape) {
    this.shapeElement = shape.render();
  }
  
}
module.exports = SVG;
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

//this class lets the app to be run in the command line
class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",
          validate: (text) =>
            text.length <= 3 ||
            "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle(text, textColor, shapeColor);
            break;
          case "square":
            shape = new Square(text, textColor, shapeColor);
            break;
          default:
            shape = new Triangle(text, textColor, shapeColor);
            break;
        }
        
        //this lets the svg be rendered after taking in all the answers from the CLI
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
      });
  }
}
module.exports = CLI;

// these are the required imports needed to run the application from the CLI
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

//This array houses all my questions used within inquirer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Please enter a color or hexadecimal number'
    },
    {
        type: 'input',
        name: 'shape',
        message: 'please choose a shape',
        choices: [
            'circle',
            'triangle',
            'square'
        ]
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Enter a shape color or a hexadecimal number'
    },

];


// the function that initializes the application, allowing for use in the CLI
function init() {
    inquirer.prompt(questions)
        .then((res) => {
            const text = res.text;
            const textColor = res.textcolor;
            const shape = res.shape;
            const shapeColor = res.shapecolor;
            
           // generateSVG(text, textColor, shape, shapeColor);
            writeToFile('logo.svg', generateSVG(text, textColor, shape, shapeColor));
            console.log('Create your logo!');
        }).catch((err) => console.info(err));
}


// This function allows for the generation of both the svg file and the creation of the shapes.
function generateSVG(text, textColor, shape, shapeColor) {

    // if statement verification for triangle
    if (shape === 'Triangle') {
        const triangle = new Triangle(text, textColor, shapeColor);
        return fs.writeFile('logo.svg', triangle.render(), err => {
           if (err){
            console.log(err);
           } else {
            console.log('You have generated a logo');
           }
        });
        } else {

            // if statement verification for square
if (shape === 'Square') {
    const square = new Square(text, textColor, shapeColor);
    return fs.writeFile('logo.svg', square.render(), err => {
        if (err){
            console.log(err);
           } else {
            console.log('You have generated a logo');
           }
        });
        }
    }

    // iif statement verification for circle
if (shape === 'Circle') {
    const circle = new Circle(text, textColor, shapeColor);
    return fs.writeFile('logo.svg', circle.render(), err => {
        if (err){
            console.log(err);
           } else {
            console.log('You have generated a logo');
           }
        });
        }

    }


    function writeToFile(fileName, res) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), res);
    }

// calling the initializing function
init();
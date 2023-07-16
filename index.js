const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Square, Circle } = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter up to 3 characters'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a color or hexadecimal number'
    },
    {
        type: 'input',
        name: 'title',
        message: 'please choose a shape',
        choices: [
            'circle',
            'triangle',
            'square'
        ]
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter a shape color or a hexadecimal number'
    },
   
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        const text = res.text;
        const textColor = res.textcolor;
        const shape = res.shape;
        const shapeColor= res.shapecolor;

        generateSVG(text, textColor, shape, shapeColor);
        console.log('Create your logo!');
        writeToFile('new.svg', ({ ...responses}));
    }).catch((err) => console.info(err));
    }

    

    init();
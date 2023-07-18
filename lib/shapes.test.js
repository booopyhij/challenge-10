// Required constants

const { describe, test } = require("node:test");
const { Triangle, Square, Circle } = require('./shapes');

// test for rendering a triangle const svg circle.render 
describe('Triangle', () => {
    test('renders the shape with a filled color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render())
            .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

// test for rendering a circle
describe('Circle', () => {
    test('renders a circle', () => {
        const shape = new Circle();
        expect(shape, render()).toEqual('');
    });
});


// test for rendering a square
describe('Square', () => {
    test('renders a circle', () => {
        const shape = new Square();
        expect(shape, render()).toEqual('');
    });
});
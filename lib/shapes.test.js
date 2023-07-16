// Required constants

const { describe, test } = require("node:test");
const { Triangle, Square, Circle } = require('./lib/shapes');

// test for rendering a triangle
describe('triangle', () => {
    test('renders the shape with a filled color', () => {
        const shape = new triangle();
        shape.setColor("blue");
        expect(shape.render())
            .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

// test for rendering a circle
describe('circle', () => {
    test('renders a circle', () => {
        const shape = new circle();
        expect(shape, render()).toEqual('');
    });
});


// test for rendering a square
describe('square', () => {
    test('renders a circle', () => {
        const shape = new square();
        expect(shape, render()).toEqual('');
    });
});
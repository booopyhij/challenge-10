const { describe, test } = require("node:test");
const {triangle, square, circle} = require('./lib/shapes');

describe('triangle', () => {
    test('renders the shape with a filled color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render())
        .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

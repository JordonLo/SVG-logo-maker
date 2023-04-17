const { describe } = require("node:test");
const {Circle, Triangle, Square } = require("./Shapes");

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color= ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100%" width="200" fill="${questions.shape}"`)
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color= ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<triangle cx="50%" cy="50%" r="100%" width="200" fill="${questions.shape}"`)
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color= ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" cy="50%" height="100" width="200" fill="${questions.shape}"`)
    });
});
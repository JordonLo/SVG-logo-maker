const fs = require ('fs');
const inquirer = ('inquirer');
const { Circle, Square, Triangle } = require('./lib');


class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"`
    }
    setTextElement() {
        this.textElement = `<text x="150 y="125" font-size="60" text-anchor="middle" fill="${questions.text}"`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

const questions = {
    {
        type: "list",
        name: "shape",
        message: "Choose which shape you would like",
        choices: [ "Circle", "Square", "Triangle" ],
    },
    {
        type: "input",
        name: "text",
        message: "For text: Enter up to 3 Characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "For text color: Enter a color keyword(Or a hexidecimal number)",
    },
    {
        type: "input",
        name: "shape-color",
        message: "For shape color: Enter a color keyword(Or a hexidecimal number)",
    },
};

function writeToFile(fileName, data) {
    const content = generateLogo(data);
    fs.writeFile(fileName, content, function(err) {
        if(err) {
            return console.log(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function init() {
    inquirer.prompt(questions).then(function(data) {
        const fileName = 'logo.svg';
        writeToFile(fileName,data);
    });
}

init();

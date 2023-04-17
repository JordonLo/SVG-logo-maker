const Shape = require("./Shapes.js");

class Circle extends Shape {
    render() {
        return `<svg height="500" width="500" xmlns="http:/www.w3.org/2000/svg"`>
        <><circle cx="250" cy="250" r="250" fill="${this.color}" /><text fill="${this.text}" font-size="75" x="250" y="250">${this.text}</text></>
    }
}

module.exports = Circle;
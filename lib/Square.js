const Shape = require("./Shapes.js");

class Square extends Shape {
    render() {
        return `<svg height="500" width="500" xmlns="http:/www.w3.org/2000/svg"`>
        <><rect x="50" cy="50%" height="100" width="200" fill="${this.color}" /><text fill="${this.text}" font-size="75" x="250" y="250">${this.text}</text></>
    }
}

module.exports = Square;
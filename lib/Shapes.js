class Shape {
    constructor( color, text, textColor ) {
        this.color="";
        this.test="";
        this.textColor=""
    }
    setColor(color) {
        this.color = color
    }
    setText(text) {
        this.text = text
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
}

module.exports = Shape;
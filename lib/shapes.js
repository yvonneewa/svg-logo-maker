
class Triangle {
    constructor(text,color,textColor){
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
    render(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    }
}

class Circle {
    constructor(text,color,textColor){
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
render(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
          <circle cx="150" cy="100" r="80" fill="${this.color}" />
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    }
}

class Square {
    constructor(text,color,textColor){
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
    render(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="${this.color}" />
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    }
}

module.exports = { Triangle, Circle, Square };

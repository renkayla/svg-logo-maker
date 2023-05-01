class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Override this method in each child class
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="75, 0 150, 150 0, 150" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="75" cy="75" r="60" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="10" y="10" width="130" height="130" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };
  
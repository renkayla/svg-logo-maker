class Shape {
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      const points = "150, 18 244, 182 56, 182";
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      const cx = 150;
      const cy = 100;
      const r = 80;
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      const x = 10;
      const y = 10;
      const width = 120;
      const height = 120;
      return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;
    }
  }
  
  describe('Shapes', () => {
    it('Triangle should render a blue triangle', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  
    it('Triangle should render a red triangle', () => {
      const triangle = new Triangle();
      triangle.setColor('red');
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    });
  
    it('Circle should render a green circle', () => {
      const circle = new Circle();
      circle.setColor('green');
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
  
    it('Circle should render a yellow circle', () => {
      const circle = new Circle();
      circle.setColor('yellow');
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow" />');
    });
  
    it('Square should render a purple square', () => {
      const square = new Square();
      square.setColor('purple');
      expect(square.render()).toEqual('<rect x="10" y="10" width="120" height="120" fill="purple" />');
    });
  
    it('Square should render an orange square', () => {
      const square = new Square();
      square.setColor('orange');
      expect(square.render()).toEqual('<rect x="10" y="10" width="120" height="120" fill="orange" />');
    });
  });
  
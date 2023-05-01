const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('should render a blue triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  it('should render a red triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });
});

describe('Circle', () => {
  it('should render a green circle', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });

  it('should render a yellow circle', () => {
    const circle = new Circle();
    circle.setColor('yellow');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow" />');
  });
});

describe('Square', () => {
  it('should render a purple square', () => {
    const square = new Square();
    square.setColor('purple');
    expect(square.render()).toEqual('<rect x="40" y="40" width="220" height="120" fill="purple" />');
  });

  it('should render an orange square', () => {
    const square = new Square();
    square.setColor('orange');
    expect(square.render()).toEqual('<rect x="40" y="40" width="220" height="120" fill="orange" />');
  });
});

const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt the user for input
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function(input) {
      return input.length <= 3 ? true : 'Please enter up to three characters.';
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword (or a hexadecimal number) for the text:',
    default: 'black'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['triangle', 'circle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword (or a hexadecimal number) for the shape:',
    default: 'white'
  }
]).then(answers => {
  // Create a new shape object based on the user's choice
  let shape;
  switch (answers.shape) {
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
  }

  // Create the SVG file
  const svg = `
    <svg xmlns="http://www.w3.org


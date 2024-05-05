// To tackle this user story in JavaScript, you can follow these steps:

// Set up the Command Line Interface (CLI): inquirer, jest X
// Create a Node.js application.x
// Use a library like readline to accept user  input from the command line.xx
// Prompt for Text:x
// Use readline to prompt the user to enter text.x
// Limit input to three characters.x
// Prompt for Text Color:x
// Prompt the user to enter a color keyword or hexadecimal number for the text color.
// Prompt for Shape:
// Provide a list of shapes (circle, triangle, square) for the user to choose from.
// Use readline to prompt the user to select a shape.
// Prompt for Shape Color:
// Prompt the user to enter a color keyword or hexadecimal number for the shape color.
// Generate SVG:
// Use the input received from the user to generate an SVG file.
// Use a library like svg.js or directly generate the SVG markup.
// Create the SVG File:
// Write the generated SVG markup to a file named logo.svg.
// Print Output Message:
// Output "Generated logo.svg" in the command line.
// Open SVG File:
// Optionally, you can use a library like open to open the logo.svg file in a browser automatically.

const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const {Triangle,Circle,Square} = require('./lib/shapes');



inquirer
.prompt([
  {
    type: "input",
    name: "logoName",
    message: "Please enter your logo name",
  },
  {
    type: "input",
    name: "textColor",
    message: `Please enter text color keyword or a hexadecimal number as the logo's text color`,
  },
  {
    type: "input",
    name: "logoColor",
    message: `Please enter a color keyword or a hexadecimal number as the logo's background color`,
  },

    {
        type: "list",
        name: "shapes",
        message: "Please select a shape.",
        choices: [
            "Triangle",
            "Square",
            "Circle",
        ],
    },
])
.then(answers => {
    const { logoName, textColor, logoColor, shapes } = answers;
    let shapeInstance;

    switch (shapes) {
        case "Triangle":
            shapeInstance = new Triangle(logoName, logoColor, textColor);
            break;
        case "Circle":
            shapeInstance = new Circle(logoName, logoColor, textColor);
            break;
        case "Square":
            shapeInstance = new Square(logoName, logoColor, textColor);
            break;
        default:
            console.error("Invalid shape selected");
            return;
    }
        writeFile('logo.svg',shapeInstance.render())
            .then(() => console.log("Generated logo.svg"))
            .catch(err => console.error("Error generating logo:", err));
    })
    .catch(error => {
        console.error(error);
    });

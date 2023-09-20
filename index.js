// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
const { askLicense } = require("./generateMarkdown");

// TODO: Create a function to initialize app
function init() {
  askLicense();
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
const { askLicense } = require("./generateMarkdown");

// const { chooseLicense } = require("./generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  askLicense();
}

// Function call to initialize app
init();

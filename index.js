// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
const { askLicense } = require("./generateMarkdown");

// const { chooseLicense } = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "project-title",
  },
  {
    type: "input",
    message: "Description - what was your motivation?",
    name: "motivation",
  },
  {
    type: "input",
    message: "Description - why did you build this project?",
    name: "why-build",
  },
  {
    type: "input",
    message: "Description - What problem does it solve?",
    name: "problem-solve",
  },
  {
    type: "input",
    message: "Description - What did you learn?",
    name: "learn",
  },
  {
    type: "input",
    message:
      "Installation - What are the steps required to install the project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage - Please provide instructions and examples for use",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Contributing - List your collaborators, if any, with links to their GitHub profiles",
    name: "contributing",
  },
  {
    type: "input",
    message: "Test Instruction",
    name: "test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  askLicense();
}

// Function call to initialize app
init();

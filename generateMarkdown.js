const inquirer = require("inquirer");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function askLicense() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to use a license?",
        name: "NeedLicense",
      },
    ])
    .then(function (response) {
      console.log(response);
    });
}

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  askLicense,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};

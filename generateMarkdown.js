const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Description - what was your motivation?",
    name: "motivation",
  },
  {
    type: "input",
    message: "Description - why did you build this project?",
    name: "whybuild",
  },
  {
    type: "input",
    message: "Description - What problem does it solve?",
    name: "problemsolve",
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
    message: "what are some features?",
    name: "feature",
  },
  {
    type: "input",
    message: "Test Instruction",
    name: "test",
  },
  {
    type: "input",
    message: "What is Github username",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email",
    name: "email",
  },
  {
    type: "input",
    message: "Any additional information",
    name: "additionalinfo",
  },
];
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
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
      if (response.NeedLicense == true) {
        chooseLicense();
      } else {
        console.log("License not needed");
        askQuestions("");
      }
    });
}

function chooseLicense() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        message: "Please select one License",
        name: "selectedLicense",
        choices: [
          "Apache 2.0",
          "Boost 1.0",
          "BSD 3-Clause",
          "BSD 2-Clause",
          "CC0 1.0",
          "EPL 1.0",
          "AGPL v3",
          "GPL v2",
          "LGPL v3",
          "GPLv3",
          "MIT",
          "MPL 2.0",
        ],
      },
    ])
    .then(function (response) {
      renderLicenseBadge(response.selectedLicense);
    });
}

function renderLicenseBadge(badge) {
  let badgeAndLink = "";
  switch (badge) {
    case "Apache 2.0":
      badgeAndLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "Boost 1.0":
      badgeAndLink = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "BSD 3-Clause":
      badgeAndLink = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause))`;
      break;
    case "BSD 2-Clause":
      badgeAndLink = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "CC0 1.0":
      badgeAndLink = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "EPL 1.0":
      badgeAndLink = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case "AGPL v3":
      badgeAndLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case "GPL v2":
      badgeAndLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case "LGPL v3":
      badgeAndLink = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case "GPLv3":
      badgeAndLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "MIT":
      badgeAndLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "MPL 2.0":
      badgeAndLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
  }
  askQuestions(badgeAndLink);
}

function askQuestions(badgeAndLink) {
  inquirer.prompt(questions).then((response) => {
    generateMarkdown(response, badgeAndLink);
  });
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, badgeAndLink) {
  fs.writeFile(
    "ReadMe.md",
    `# <Your-Project-Title>${data.title}
    
  ## Description ${badgeAndLink}
  
  - What was your motivation?\n
  ${data.motivation}
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")\n
  ${data.whybuild}
  - What problem does it solve?\n
  ${data.problemsolve}
  - What did you learn?\n
  ${data.learn}
  
  ## Table of Contents 
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license-and-badges)
  - [Additional Info](#additional-infomation)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  
  ${data.usage}\n
  To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      \`\`\`md
      ![alt text](assets/images/screenshot.png)
      \`\`\`
  
  ## Credits
  ${data.contributing}

  
  ## License-and-Badges
  ${badgeAndLink}
  
  --- 
  
  ## Features
  ${data.feature}
  
    
  ## Tests
  ${data.test}

  ## Additional-Infomation
  Github: https://github.com/${data.username}
  Email: ${data.email}
  ${data.additionalinfo}

    `,
    (err) => (err ? console.error(err) : console.log("Commit logged!"))
  );
}

module.exports = {
  generateMarkdown,
  askLicense,
  chooseLicense,
  renderLicenseBadge,
};

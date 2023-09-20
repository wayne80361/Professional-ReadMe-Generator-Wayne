const inquirer = require("inquirer");
const fs = require("fs");

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
      if (response.NeedLicense == true) {
        chooseLicense();
      } else console.log("License not needed");
      fs.writeFile("test.MD", "", (err) =>
        err ? console.error(err) : console.log("Commit logged!")
      );
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
  // fs.writeFile("test.MD", badgeAndLink, (err) =>
  //   err ? console.error(err) : console.log("Commit logged!")
  // );
  generateMarkdown();
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  fs.writeFile(
    "test2.MD",
    `# <Your-Project-Title>

  ## Description
  
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      \`\`\`md
      ![alt text](assets/images/screenshot.png)
      \`\`\`
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  `,
    (err) => (err ? console.error(err) : console.log("Commit logged!"))
  );
}

module.exports = {
  generateMarkdown,
  askLicense,
  chooseLicense,
  renderLicenseBadge,
  renderLicenseSection,
};

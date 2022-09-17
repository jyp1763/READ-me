// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return `## License
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    if (license === "GNU") {
      return `## License
    [![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)](https://opensource.org/licenses/GNU)`;
    }
    if (license === "Eclipse") {
      return `## License
    [![License: Eclipse](https://img.shields.io/badge/License-Eclipse-blue.svg)](https://opensource.org/licenses/Eclipse)`;
    }
    if (license === "ISC") {
      return `## License
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }
    if (license === "None") {
      return "";
    }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##license:
  ${renderLicenseBadge(data.license)}

  ##Table of contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Testing](#testing)
  -[contact me](#contact-me)
  
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## contact me:
  - github: [${data.github}](https://github.com/${data.github})
  - email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;

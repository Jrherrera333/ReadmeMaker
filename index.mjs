import inquirer from 'inquirer';
import fs from "fs/promises";


let {title, description, install, use, contributions, test, RepoLink, Questions, license } = await inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What's your first name",
      },
      {
        type: "input",
        name: "install",
        message: "Are there any installations required?"
      },
      {
        type: "input",
        name: "use",
        message: "What is the use of the application"
      },
      {
        type: "input",
        name: "contributions",
        message: "Are there any contribution rules?"
      },
      {
        type: "input",
        name: "test",
        message: "Please provide test instructions if applicable"
      },
      {
        type: "input",
        name: "RepoLink",
        message: "What's you GitHub Repo link?"
    },
    {
        type: "input",
        name: "Questions",
        message: "What are your questions about the project?"
    },
      {
        type: 'list',
        name: 'license',
        message: "Choose a license",
        choices: ["MIT", "Apache", "GNU"],
     
      },
  ])

let readmeText = 
`# Project Description.
${description}

## A Licenses.
${generateLicense(license)}

## Tittle.
${title}

## Installation.
${install}

## Use.
${use}

## Contributions.
${contributions}

## Test.
${test}

## RepoLink.
${RepoLink}

## Questions.
${Questions}`;

fs.writeFile("README.md", readmeText)
// console.log(first_name, last_name);

function generateLicense(license){
    console.log(license);

    if (license === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]"
    } else if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      } else if (license === "GNU") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      }
      return ``;
    }

    


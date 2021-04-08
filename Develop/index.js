// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { listenerCount } = require('events');

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// prompt user function
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Project installation instructions?',
      },
      {
        type: 'input',
        name: 'useage',
        message: 'Project useage information?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Project contributors?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Project test instructions?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose a License for your README by selecting from the following:\n(1) Apache\n(2) Boost\n(3) BSD-3\n(4) BSD-2\n(5) CCO\n'  
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter you GitHub User Name:\n',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your E-mail:\n',
      },
    ]);
  };

const generateREADME = (answers) => {
  let link;
  switch(answers.license) { 
    case '1':
      link = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case '2':
      link = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case '3':
      link = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`; 
      break;
    case '4':
      link = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case '5':
      link = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
  }

  return `# ${answers.title}\n\n${link}\n\n## Project Description:\n${answers.description} \n\n## Table of Contents:\n\n - [Intallation](#installation)\n - [Useage](#useage)\n - [Contributions](#contributions)\n - [Testing](#testing)\n - [Questions](#questions)\n\n## Installation:\n${answers.install}\n\n## Useage:\n${answers.useage}\n\n## Contributions:\n${answers.contributions}\n\n## Testing:\n${answers.test}\n\n## Questions:\nGitHub Profile: [GitHub Link](https://github.com/${answers.github})\n\nFor any further questions about this project, you can contact me at my email: ${answers.email}`
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('READEME.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to READEME.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();


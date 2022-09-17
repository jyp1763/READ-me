// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'provide a description of the project?',
        validate: your_Description => {
            if (your_Description) {
                return true;
            } else {
                console.log('enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: your_Installation => {
            if (your_Installation) {
                return true;
            } else {
                console.log('enter steps of installation!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: your_Usage => {
            if (your_Usage) {
                return true;
            } else {
                console.log('enter the way you use this project to continue!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'choose a license for your project?',
        choices: ('MIT','GNU','Eclipse','ISC', 'None'),
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log('select a license for the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'In what ways can users contribute to the project?',
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log('Please enter ways users can contribute to the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would a user test this project?',
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log('how would a user test this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter gitHub username?',
        validate: github_Input => {
            if (github_Input) {
                return true;
            } else {
                console.log('github username required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email for questions regarding the project',
        validate: email_Input => {
            if (email_Input) {
                return true;
            } else {
                console.log('enter a email to continue!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    Fs.writeFile(fileName,data,(err) => {
        if (err) {
            return console.log(err);
        }
    console.log('you can now preview your README file');
    }
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile('README.md',generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();

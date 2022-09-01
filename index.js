// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs ");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What's the title of your project?",
  },

  {
    type: "input",
    name: "Description",
    message: "How would you like to describe your project?",
  },
  {
    type: "input",
    name: "Installation Instructions",
    message: "How could the user install the program?",
  },

  {
    type: "input",
    name: "Usage Information",
    message: "Any usage information?",
  },

  {
    type: "input",
    name: "Contribution Guildelines",
    message: "Any contribution guidelines?",
  },

  {
    type: "input",
    name: "Test Instructions",
    message: "What are the test instructions?",
  },
];

// To prompt the questions array on the terminal and console log the response from clients
inquirer.prompt(questions).then((response) => {
  console.log(response);
});

// TODO: Create a function to write README file
function writeToFile(response) {
  fs.writeFile("README", response, (err) =>
    err ? console.log(err) : console.log("success!")
  );
}

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

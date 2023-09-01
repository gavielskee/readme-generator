const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project's purpose and how it functions."
    },
    {
        type: "input",
        name: "installation",
        message: "What installations are required to use this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license is being used?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed towards this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

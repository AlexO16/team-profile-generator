const inquirer = require('inquirer');
const fs = require('fs');
const htmlData = require('./dist/htmldata')
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')


// function writeToFile(data) {
//     fs.writeFile('index.html', data, (err)=>
//     err ? console.log("error") : console.log('HTML created!'))
//     }

//employee = name, ID, email
//Team manager = name, ID, email, office#
//engineer = name, ID, email, github
//intern = name, ID, emil, school

async function employeeData() {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: ' what type of employee?',
                name: 'employeeType',
                choices: ['manager', 'engineer', 'intern'],
            },
            {
                type: 'input',
                message: 'What is the employee name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the employee ID?',
                name: 'employeeID',
            },
            {
                type: 'input',
                message: 'What is the email address?',
                name: 'email',
            },

        ])
}

async function init() {
let data = await employeeData()

if(data.employeeType === "manager") {
    
}
}

init()
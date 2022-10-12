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
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
}

function managerData() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the manager's ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the office number?',
                name: 'office',
            },
        ])
}

function engineerData() {
    return inquirer
        .prompt([    
            {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the engineer's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email address?',
            name: 'email',
        },

            {
                type: 'input',
                message: 'What is the GitHub username?',
                name: 'github',
            },
        ])
}

function internData() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the interns's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the interns's ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What school did the intern attend?',
                name: 'school',
            }
        ])
}

async function addTeamMember() {
    return inquirer.prompt([ 
        {
            type: 'confirm',
            message: 'Add another employee?',
            name: 'confirm',
        }
    ])
}

async function init() {

    let addEmployee = true

    while(addEmployee) {
    let data = await employeeData()

    if(data.employeeType === 'manager') {
        await managerData()
    } else if(data.employeeType === 'engineer') {
        await engineerData()
    } else {
        await internData()
    }

    let answer = await addTeamMember()
    if(!answer.confirm) {
        addEmployee = false
    }
    } 
}

init()
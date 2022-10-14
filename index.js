const inquirer = require('inquirer');
const fs = require('fs');
const htmlData = require('./dist/htmldata');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const empArr = [];


function writeToFile(empArr) {
    const data = htmlData(empArr)
    fs.writeFile('index.html', data, (err)=>
    err ? console.log("error") : console.log('HTML created!'))
    }

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
            name: 'addTeamMember',
        }
    ])
}


async function init() {

    let addEmployee = true
   
    while (addEmployee) {
        let data = await employeeData()
        if (data.employeeType === 'Manager') {
          const {name, id, email, office} = await managerData()
        empArr.push(new Manager(name, id, email, office))
        } else if (data.employeeType === 'Engineer') {
          const {name, id, email, github} = await engineerData()
         empArr.push(new Engineer(name, id, email, github))
        } else {
          const {name, id, email, school} = await internData()
        empArr.push(new Intern(name, id, email, school))
        }
        let answer = await addTeamMember()
    if (!answer.addTeamMember) {
        addEmployee = false
    }
    }
    
    writeToFile(empArr)
}

init()
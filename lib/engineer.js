const Employee = require('../lib/employee')
//engineer = name, ID, email, github

class Engineer extends Employee {
    constructor(name, employeeID, email, github) {
        super(name, employeeID, email)
        this.github = github
    }
}




module.exports = Engineer;
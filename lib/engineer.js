const Employee = require('../lib/employee')
//engineer = name, ID, email, github

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
}




module.exports = Engineer;
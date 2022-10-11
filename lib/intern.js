const Employee = require('../lib/employee')
//intern = name, ID, emil, school

class Intern extends Employee {
    constructor(name, employeeID, email, school) {
        super(name, employeeID, email)
        this.school = school
    }
}




module.exports = Intern;
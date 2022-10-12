const Employee = require('../lib/employee')
//intern = name, ID, emil, school

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
}




module.exports = Intern;
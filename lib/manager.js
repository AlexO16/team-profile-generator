const Employee = require('../lib/employee')
//Team manager = name, ID, email, office#

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
    }
}





module.exports = Manager;
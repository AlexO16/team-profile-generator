const Employee = require('../lib/employee')
//Team manager = name, ID, email, office#

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
        this.role = 'manager'
    }
    getOffice() {
        return this.office
    }
    getRole() {
        return this.role
    }
}

module.exports = Manager;
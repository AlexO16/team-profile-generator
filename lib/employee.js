 //employee = name, ID, email

 class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    name() {
        return this.name;
     }
    id() {
        return this.id
    }
 }






module.exports = Employee;
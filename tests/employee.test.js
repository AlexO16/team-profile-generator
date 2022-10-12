const Employee = require('../lib/employee');

describe("Employee", ()=> {
    describe("name"), () => {
        it("Should return the given name parimeter"), () => {
            const emp = new Employee('name', 'employeeID', 'email'); //Arrange
            const result = template.getname() //'Act' getting the info
            expect(result).toEqual('name') //Assert 
        }
    }
})

describe("employeeID"), () => {
    it("Should return the given employeeID parimeter"), () => {
        const emp = new Employee('name', 'employeeID', 'email'); //Arrange
        const result = template.getID() //'Act' getting the info
        expect(result).toEqual('employeeID') //Assert 
    }
}

describe("email"), () => {
    it("Should return the given email parimeter"), () => {
        const emp = new Employee('name', 'employeeID', 'email'); //Arrange
        const result = template.getemail() //'Act' getting the info
        expect(result).toEqual('email') //Assert 
    }
}
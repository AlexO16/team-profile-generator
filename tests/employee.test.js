const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("name", () => {
        it("Should return the given name parimeter", () => {
            const emp = new Employee('name', 'employeeID', 'email'); //Arrange
            const result = emp.name //'Act' getting the info
            expect(result).toEqual('name') //Assert 
        })
    })


    describe("id", () => {
        it("Should return the given employeeID parimeter", () => {
            const emp = new Employee('name', 'employeeID', 'email'); //Arrange
            const result = emp.id //'Act' getting the info
            expect(result).toEqual('employeeID') //Assert 
        })
    })

    describe("email", () => {
        it("Should return the given email parimeter", () => {
            const emp = new Employee('name', 'employeeID', 'email'); //Arrange
            const result = emp.email //'Act' getting the info
            expect(result).toEqual('email') //Assert 
        })
    })
})
const Manager = require('../lib/manager')

describe("Manager", () => {
    describe("office", () => {
        it("Should return the given office perimeter", () => {
            const manager = new Manager('name', 'employeeID', 'email', 'office'); //Arrange
            const result = manager.office //'Act' getting the info
            expect(result).toEqual('office') //Assert 
        })
    })
})
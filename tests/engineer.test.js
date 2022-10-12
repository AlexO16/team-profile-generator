const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("GitHub", () => {
        it("Should return the given github perimeter", () => {
            const engineer = new Engineer('name', 'employeeID', 'email', 'github'); //Arrange
            const result = engineer.github //'Act' getting the info
            expect(result).toEqual('github') //Assert 
        })
    })
})
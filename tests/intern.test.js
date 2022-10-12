const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("school", () => {
        it("Should return the given school parimeter", () => {
            const intern = new Intern('name', 'employeeID', 'email', 'school'); //Arrange
            const result = intern.school //'Act' getting the info
            expect(result).toEqual('school') //Assert 
        })
    })
})
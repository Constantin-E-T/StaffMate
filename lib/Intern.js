// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// defines and exports the Intern class, which inherits from the Employee class. The Intern class has a constructor that takes four parameters: name, id, email, and school. It calls the super method to initialize the properties inherited from the Employee class and initializes its own school property.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }
  
    getRole() {
      return 'Intern';
    }
  }
  
  module.exports = Intern;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// defines and exports the Manager class, which inherits from the Employee class. The Manager class takes in four parameters - name, id, email, and officeNumber - and uses the super keyword to call the constructor of its parent class Employee. It has two methods: getOfficeNumber(), which returns the manager's office number, and getRole(), which overrides the getRole() method of the Employee class to return 'Manager'. Finally, the Manager class is exported so that it can be used in other modules.
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    getRole() {
      return 'Manager';
    }
  }
  
  module.exports = Manager;
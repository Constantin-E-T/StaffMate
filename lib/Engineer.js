// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// This code defines and exports the Engineer class that inherits from the Employee class. The Engineer class has a constructor method that takes in parameters for name, id, email, and github and calls the constructor of the parent Employee class using the super keyword to initialize those properties.

const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }
  
    getRole() {
      return 'Engineer';
    }
  }
  
  module.exports = Engineer;
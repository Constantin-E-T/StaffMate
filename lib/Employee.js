// TODO: Write code to define and export the Employee class

// This code defines an Employee class with a constructor that sets the name, id, and email of the employee. It also has four methods: getName(), getId(), getEmail(), and getRole(). Finally, it exports the Employee class using the module.exports statement, so that it can be used in other parts of the application.
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return 'Employee';
    }
  }
  
  module.exports = Employee;
  
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];

createManager(); // call createManager function

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "memberType",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answer) => {
      if (answer.memberType === "Engineer") {
        createEngineer();
      } else if (answer.memberType === "Intern") {
        createIntern();
      } else {
        fs.writeFile(outputPath, render(teamMembers), (err) => {
          if (err) throw err;
          console.log(
            "The team.html file has been generated in the output folder!"
          );
        });
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      teamMembers.push(engineer);
      createTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      teamMembers.push(intern);
      createTeam();
    });
}

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
        validate: (answer) => {
          const valid = answer.match(/^[1-9]\d*$/);
          if (valid) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        },
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: (answer) => {
          const valid = answer.match(/\S+@\S+\.\S+/);
          if (valid) {
            return true;
          }
          return "Please enter a valid email address.";
        },
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        validate: (answer) => {
          const valid = answer.match(/^[1-9]\d*$/);
          if (valid) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      createTeam();
    });
}

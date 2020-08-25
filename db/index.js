// class db and all querys
const cTable = require('console.table');
const inquirer = require('inquirer');

// class Employees {
//     constructor
// }

runSearch();

function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Employee", 
          "Add Employee Department" ,
          "Add Employee Role",
          "Update Employee Role"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View All Departments":
          viewDepts();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Employee Department":
          addEmployeeDept();
          break;

        case "Add Employee Role":
          addEmployeeRole();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;  
        }
      });
  }

  function viewDepts() {
    var query = "SELECT name FROM employees.department"
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].name);
      }
      runSearch();
    });
  }
  
  function viewRoles() {
    var query = "SELECT title FROM employees.role"
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].title);
      }
      runSearch();
    });
  }

  function viewEmployees() {
    var query = "SELECT first_name, last_name FROM employees.employee"
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(`${res[i].first_name} ${res[i].last_name}`);
      }
      runSearch();
    });
  }

  function addEmployee() {
    inquirer
      .prompt([
          {
              name: "firstName",
              type: "input",
              message: "What is the employee's first name?"
          },
          {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
        }
      ]).then(function(answer) {
        var query = "INSERT INTO employee (first_name, last_name) VALUES (?, ?)";
        connection.query(query, { firstName: answer.firstName }, { lastName: answer.lastName }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log(`New Employee: ${res[i].firstName} ${res[i].lastName}`);
          }
          runSearch();
        });
      });
  }

  function addEmployeeDept() {
    // inquirer
    //   .prompt({
    //     name: "addEmployeeDept",
    //     type: "input",
    //     message: "What department will this employee work in?",
    //     choices: ["Engineering", "Sales", "HR", "IT"]
    //   })
    //   .then(function(answer) {
    //     var query = "SELECT position, song, year FROM top5000 WHERE ?";
    //     connection.query(query, { artist: answer.artist }, function(err, res) {
    //       for (var i = 0; i < res.length; i++) {
    //         console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
    //       }
    //       runSearch();
    //     });
    //   });
  }
  
  function addEmployeeRole() {
    // inquirer
    //   .prompt({
    //     name: "addEmployeeDept",
    //     type: "input",
    //     message: "What department will this employee work in?",
    //     choices: ["Engineering", "Sales", "HR", "IT"]
    //   })
    //   .then(function(answer) {
    //     var query = "SELECT position, song, year FROM top5000 WHERE ?";
    //     connection.query(query, { artist: answer.artist }, function(err, res) {
    //       for (var i = 0; i < res.length; i++) {
    //         console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
    //       }
    //       runSearch();
    //     });
    //   });
  }

  function updateEmployeeRole() {
    // var query = "SELECT first_name, last_name FROM employees.department"
    // connection.query(query, function(err, res) {
    //   for (var i = 0; i < res.length; i++) {
    //     console.log(`${res[i].first_name} ${res[i].last_name}`);
    //   }
    //   runSearch();
    // });
  }
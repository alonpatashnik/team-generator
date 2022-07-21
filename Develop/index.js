const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer')
const fs = require('fs')

const manager = new Manager('Alon', 26062, 'alonp714@gmail.com', 14)
const intern = new Intern('Eric', 45065, 'alonp@gmail.com', 'Butler University')
const engineer = new Engineer('Matt', 26062, 'a714@gmail.com', 'github.com/alonpatashnik')

console.log(manager)
console.log(intern)
console.log(engineer)



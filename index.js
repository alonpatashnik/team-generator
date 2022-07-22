const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer')
const fs = require('fs')
const html = require('./util/generateHtml')


const team = []

const manager = new Manager('Alon', 26062, 'alonp714@gmail.com', 14)
const intern = new Intern('Eric', 45065, 'alonp@gmail.com', 'Butler University')
const engineer = new Engineer('Matt', 26062, 'a714@gmail.com', 'github.com/alonpatashnik')


function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: `Let's start your team by creating a manager for our team. What is their name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is their employee ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is their email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is their office number?`,
            name: 'offNum'
        },
    ]).then((res) => {
        const newManager = new Manager(res.name, res.id, res.email, res.offNum)
        team.push(newManager)
        teamLoop();
    })
}

function teamLoop() {
    inquirer.prompt([
        {
            type: 'list',
            message: `What would you like to do next?`,
            name: 'teamLoop',
            choices: ['Add an engineer', 'Add an intern', 'Nothing-- the team is complete']
        }
    ]).then((res) => {
        switch (res.teamLoop) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            case 'Nothing-- the team is complete':
                fs.writeFile('team.html',html(team),err=>err?console.error(err):console.log('success'));
                break;
        
            default:
                break;
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is this engineer's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is their employee ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is their email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is their github link?`,
            name: 'git'
        },
    ]).then((res) => {
        const newEngineer = new Engineer(res.name, res.id, res.email, res.git)
        console.log(newEngineer)
        team.push(newEngineer)
        console.log(team)
        teamLoop();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is this Intern's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is their employee ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is their email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What school do they go to?`,
            name: 'school'
        },
    ]).then((res) => {
        const newIntern = new Intern(res.name, res.id, res.email, res.school)
        console.log(newIntern)
        team.push(newIntern)
        console.log(team)
        teamLoop();
    })
}

init();



const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const manager = new Manager('Alon', 26062, 'alonp714@gmail.com', 14)
console.log(manager.getRole())
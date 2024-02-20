const UniPerson = require('./UniPerson')
const _employeeId = Symbol('employeeId');
const _salary = Symbol('salary');

class Employee extends UniPerson {
    constructor(id, name, employeeId, salary) {
        super(id, name);
        this[_employeeId] = employeeId;
        this[_salary] = null;
    }
    get employeeId() {
        return this[_employeeId];
    }
    get salary() {
        return this[_salary];
    }
    set salary(salary) {
        this[_fee] = salary;
    }
    toString() {
        return `${super.toString()},EmployeeId : ${this[_employeeId]},SALARY: ${this[_salary]}`
    }
}
module.exports = Employee;
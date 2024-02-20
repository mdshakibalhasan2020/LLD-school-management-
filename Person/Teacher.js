const Employee = require('./Employee');
const _subject = Symbol('subject');
class Teacher extends Employee {
    constructor(name, id, ) {
        super(name, id, subject);
        this[_subject] = null;
    }
    get subject() {
        return this[_subject];
    }
    set subject(value) {
        this[_subject] = value;
    }
    toString() {
        return `${super.toString()},Subject:${this[_subject]}`
    }
}
module.exports = Teacher;
const Person = require('./Person');
const _department = Symbol('department');
const _account = Symbol('account');
class Uniperson extends Person {
    constructor(id, name) {
        super(id, name);
        this[_department] = null;
        this[_account] = null;

    }
    get _department() {
        return this[_department];
    }
    set department(value) {
        this[_department] = value;
    }
    get _account() {
        return this[_account];
    }
    set _account(value) {
        this[_account] = value;
    }
    toString() {
        return `${super.toString()} , Department: ${this[_department]} , Account:${this[_account]}`;

    }
}
module.exports = Uniperson;
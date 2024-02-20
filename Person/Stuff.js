const Employee = require('./Employee');
const _title = Symbol('title');
class Stuff extends Employee {
    constructor(name, id, title) {
        super(name, id);
        this[_title] = title;
    }
    get title() {
        return this[_title];
    }
    set title(value) {
        this[_title] = value;
    }
    toString() {
        return `${super.toString()} , this is the title: ${this[_title]}`;
    }
}
module.exports = Stuff;
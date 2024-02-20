const _id = Symbol('id');
const _name = Symbol('name');
const _passmark = Symbol('passmark');
const _subject = Symbol('subject');

class Exam {
    constructor({ id, name, passmark, subject }) {
        this[_id] = id;
        this[_name] = name;
        this[_passmark] = passmark || 33;
        this[_subject] = subject;
    }
    get id() {
        return this[_id];
    }
    get name() {
        return this[_name];
    }
    set name(value) {
        this[_name] = value;
    }
    get passmark() {
        return this[_passmark];
    }
    set passmark(value) {
        this[_passmark] = value;
    }
    get subject() {
        return this[_subject];
    }
    set subject(value) {
        this[_subject] = value;
    }
    toString() {
        return `
        Id:-${this[_id]},
        name:-${this[_name]},
        Passmark:-${this[_passmark]},
        Subject:-${this[_subject]},    
        `;
    }
}
module.exports = Exam;
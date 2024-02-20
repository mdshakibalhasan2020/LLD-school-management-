const id = Symbol('id');
const email = Symbol('email');
const phone = Symbol('phone');
const alternativePhone = Symbol('alternativePhone');
const address = Symbol('address');

class Contact {
    constructor({ id, email, phone, alternativePhone, address }) {
        this[_id] = id;
        this[_email] = email;
        this[_phone] = phone;
        this[_alternativePhone] = alternativePhone || '';
        this[_address] = address;
    }
    get id() {
        return this[_id];
    }
    get email() {
        return this[_email];
    }
    set email(value) {
        this[_email] = value;
    }
    get phone() {
        return this[_phone];
    }
    set phone(value) {
        this[_phone] = value;
    }
    get alternativePhone() {
        return this[_alternativePhone];
    }
    set alternativePhone(value) {
        this[_alternativePhone] = value;
    }
    get address() {
        return this[_address];
    }
    set address(value) {
        this[_address] = value;
    }
    toString() {
        return `
        Id : ${this[_id]},
        Email : ${this[_email]},
        Phone : ${this[_phone]},
        AlternativePhone : ${this[_alternativePhone]},
        Address : ${this[_address]},
        `;
    }
}
module.exports = Contact;
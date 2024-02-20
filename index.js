const { Guardian } = require('./Person');
const guardian = new Guardian(101, 'bonka', 'teacher', 6000);
console.log(guardian.toString());
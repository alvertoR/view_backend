const bcrypt = require('bcrypt');
const salt = 10;

const hashPassword = (password) => {
    return bcrypt.hash(password, salt);
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    comparePassword
}
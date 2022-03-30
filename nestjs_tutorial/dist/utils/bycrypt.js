"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.encodePassword = void 0;
const bycrypt = require("bcrypt");
function encodePassword(rawPassword) {
    const SALT = bycrypt.genSaltSync();
    return bycrypt.hashSync(rawPassword, SALT);
}
exports.encodePassword = encodePassword;
function comparePasswords(rawPassword, hash) {
    return bycrypt.compareSync(rawPassword, hash);
}
exports.comparePasswords = comparePasswords;
//# sourceMappingURL=bycrypt.js.map
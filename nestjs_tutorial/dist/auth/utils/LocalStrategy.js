"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
}
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=LocalStrategy.js.map
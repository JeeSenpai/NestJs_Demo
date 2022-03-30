"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class UserNotFoundException extends common_1.HttpException {
    constructor(msg, status) {
        super(msg || 'User Not Found', status || common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=UserNotFound.exception.js.map
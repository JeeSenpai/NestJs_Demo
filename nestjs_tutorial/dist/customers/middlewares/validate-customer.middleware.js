"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCustomerMiddleware = void 0;
const common_1 = require("@nestjs/common");
let ValidateCustomerMiddleware = class ValidateCustomerMiddleware {
    use(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization)
            return res
                .status(403)
                .send({ error: 'No Authentication Token Provided.' });
        if (authorization === '123') {
            next();
        }
        else {
            return res.status(403).send({ error: 'Invalid Authentication Token.' });
        }
    }
};
ValidateCustomerMiddleware = __decorate([
    (0, common_1.Injectable)()
], ValidateCustomerMiddleware);
exports.ValidateCustomerMiddleware = ValidateCustomerMiddleware;
//# sourceMappingURL=validate-customer.middleware.js.map
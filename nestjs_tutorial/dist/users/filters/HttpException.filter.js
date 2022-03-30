"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
class HttpExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();
        response.sendStatus(exception.getStatus());
    }
}
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=HttpException.filter.js.map
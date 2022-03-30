import { HttpException, HttpStatus } from "@nestjs/common";
export declare class UserNotFoundException extends HttpException {
    constructor(msg?: string, status?: HttpStatus);
}

import { CreateUserDto } from './dto/CreateUser.dto';
import { SerializedUser } from './types';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): SerializedUser[];
    getByUsername(username: string): SerializedUser;
    getById(id: number): SerializedUser;
    createUser(createUserDto: CreateUserDto): Promise<import("../typeorm").User>;
}

import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../typeorm").User[]>;
    getByUsername(username: string): Promise<import("../typeorm").User[]>;
    getById(id: number): Promise<import("../typeorm").User[]>;
    createUser(createUserDto: CreateUserDto): Promise<import("../typeorm").User>;
}

import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { SerializedUser, User } from './types/index';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    private users;
    getUsers(): SerializedUser[];
    getUserByUsername(username: string): User;
    getUserById(id: number): User;
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
}

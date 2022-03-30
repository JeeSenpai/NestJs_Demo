import { User, User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    private users;
    getAllUsers(): Promise<User[]>;
    getUserByUsername(username: string): Promise<User[]>;
    getUserById(id: number): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
    findUserById(id: number): Promise<User>;
}

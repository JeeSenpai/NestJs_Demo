import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User, User as UserEntity } from 'src/typeorm';
import { encodePassword } from 'src/utils/bycrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,) {} 

    private users: User[] = [];

    getAllUsers(){
        return this.userRepository.find();
    }
    
    getUserByUsername(username: string){
        return this.userRepository.find({username});
    }

    getUserById(id: number){
        return this.userRepository.find({id});
    }

    createUser(createUserDto: CreateUserDto){
        const password = encodePassword(createUserDto.password);

        const newUser = this.userRepository.create({...createUserDto, password});
        return this.userRepository.save(newUser);
    }

    findUserByUsername(username: string){
        return this.userRepository.findOne({username});
    }

    findUserById(id: number){
        return this.userRepository.findOne(id);
    }
}

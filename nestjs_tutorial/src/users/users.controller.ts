import { Controller, Inject, Get, Param, HttpException, HttpStatus, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, UseFilters, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utils/LocalGuard';
import { CreateCustomerDto } from 'src/customers/dto/create-customer.dto';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserNotFoundException } from './exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from './filters/HttpException.filter';
import { SerializedUser } from './types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService,){}
    
    @UseGuards(AuthenticatedGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers(){
        return this.userService.getAllUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/username/:username')
    getByUsername(@Param('username') username: string){
        const user = this.userService.getUserByUsername(username);
        if(user) return user;
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }


    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get('id/:id')
    getById(@Param('id', ParseIntPipe) id: number){
        const user = this.userService.getUserById(id);
        if (user) return user;
        else{
            throw new UserNotFoundException('User Was Not Found');
        }
    }


    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }


}

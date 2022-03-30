import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService){}

   @Get('')
    getAllCustomers(){
       return this.customerService.getAllCustomers();
   }

   @Get('/search/:id')
   searchCustomerById(@Param('id', ParseIntPipe) id: number){
      const customer = this.customerService.findCustomerById(id);
      if (customer) return customer;
      else throw new HttpException('Customer not Found', HttpStatus.BAD_REQUEST);
   }

   @Post('create')
   @UsePipes(ValidationPipe)
   createCustomer(@Body() createCustomerDto: CreateCustomerDto){
      this.customerService.createCustomer(createCustomerDto);
   }
} 
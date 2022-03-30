import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './types/Customer';

@Injectable()
export class CustomersService {
    

 private customers: Customer[] = [
        {
            id: 1,
            email: 'jee@gmail.com',
            name: 'JeeSoon'
        },
        {
            id: 2,
            email: 'ryan@gmail.com',
            name: 'Ryan R'
        },
        {
            id: 3,
            email: 'johnb@gmail.com',
            name: 'Jonny W'
        },
    ];

    findCustomerById(id: number){
        return this.customers.find((user) => user.id ===id);
    }

    getAllCustomers(){
        return this.customers;
    }

    createCustomer(customerDto: CreateCustomerDto){
        this.customers.push(customerDto);
    }
}

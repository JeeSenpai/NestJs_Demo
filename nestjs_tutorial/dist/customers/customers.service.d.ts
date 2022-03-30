import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './types/Customer';
export declare class CustomersService {
    private customers;
    findCustomerById(id: number): Customer;
    getAllCustomers(): Customer[];
    createCustomer(customerDto: CreateCustomerDto): void;
}

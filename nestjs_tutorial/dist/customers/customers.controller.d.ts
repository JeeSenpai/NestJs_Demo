import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomersController {
    private customerService;
    constructor(customerService: CustomersService);
    getAllCustomers(): import("./types/Customer").Customer[];
    searchCustomerById(id: number): import("./types/Customer").Customer;
    createCustomer(createCustomerDto: CreateCustomerDto): void;
}

import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";

export class CreateCustomerDto {
    
    @IsNumberString()
    id: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;
}
import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;
  @IsString()
  email: string;

  @IsNumber()
  age: number;
}

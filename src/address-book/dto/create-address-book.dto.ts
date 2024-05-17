import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAddressBookDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  contact_name: string;

  @IsNotEmpty()
  phone_number: boolean;

  @IsNotEmpty()
  country_territory: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;
}

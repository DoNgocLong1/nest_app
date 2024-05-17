import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressBookList, AddressBookService } from './address-book.service';
import { AddressBook } from './entities/address-book.entity';
import { CreateAddressBookDto } from './dto/create-address-book.dto';

@Controller('address-book')
export class AddressBookController {
  constructor(private readonly addressBookService: AddressBookService) {}

  @Get()
  getHello(): Promise<AddressBookList> {
    return this.addressBookService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createAddressBook(
    @Body() addressBookData: CreateAddressBookDto,
  ): Promise<AddressBook> {
    console.log('addressBookData', addressBookData);
    if (!addressBookData.contact_name) {
      throw new HttpException(
        'contact name is require',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.addressBookService.createAddressBook(addressBookData);
  }
}

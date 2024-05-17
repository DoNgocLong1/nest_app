import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressBook } from './entities/address-book.entity';
import { Repository } from 'typeorm';

export type AddressBookList = {
  count: number;
  data: AddressBook[];
};
@Injectable()
export class AddressBookService {
  constructor(
    @InjectRepository(AddressBook)
    private readonly addressBooksRepository: Repository<AddressBook>,
  ) {}
  getAllAddressBook(): string {
    return 'Hello address book';
  }
  async findAll(): Promise<AddressBookList> {
    const count = await this.addressBooksRepository.count();
    const data = await this.addressBooksRepository.find();
    return {
      count,
      data,
    };
  }
  async createAddressBook(data: Partial<AddressBook>): Promise<AddressBook> {
    const newAddressBook = this.addressBooksRepository.create(data);
    return await this.addressBooksRepository.save(newAddressBook);
  }
}

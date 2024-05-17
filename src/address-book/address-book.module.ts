import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressBookController } from './address-book.controller';
import { AddressBookService } from './address-book.service';
import { AddressBook } from './entities/address-book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressBook])],
  controllers: [AddressBookController],
  providers: [AddressBookService],
})
export class AddressBooksModule {}

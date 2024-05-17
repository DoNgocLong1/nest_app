import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address_books')
export class AddressBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contact_name: string;

  @Column()
  company: string;

  @Column()
  phone_number: boolean;

  @Column({ default: 0 })
  additional_phone_number: number;

  @Column()
  email: string;

  @Column()
  country_territory: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column({ default: 0 })
  additional_address: number;

  @Column({ default: 0 })
  is_residential_address: number;

  @Column({ default: 0 })
  is_detail_address: number;

  @Column({ default: 0 })
  delete_flag: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: number;
}

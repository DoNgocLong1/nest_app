export type AddressBook = {
  contact_name: string;
  company: string;
  phone_number: string;
  additional_phone_number: string;
  email: string;
  country_territory: string;
  address: string;
  postal_code?: string;
  city: string;
  additional_address: number;
  is_residential_address: number;
  is_detail_address: number;
  delete_flag?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};

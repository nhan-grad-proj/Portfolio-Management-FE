import { BoxItem } from '../../../../system/domain/ui-models/combobox.model';

export type TransactionColumn = {
  operation: string;
  holding: string;
  date: string;
  amount: string;
  price: string;
  fee: string;
};

export type AddFeeModalModel = {
  date: string;
  fee: string;
  note: string;
};

export type AddTransactionModalModel = {
  ticket: BoxItem;
  operation: string;
  date: string;
  amount: string;
  price: string;
  fee: string;
  note: string;
};

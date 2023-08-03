import { BoxItem } from '../../../../system/domain/ui-models/combobox.model';

export type TransactionColumn = {
  asset: string;
  operation: string;
  date: string;
  amount: string;
  price: string;
  fee: string;
  total: number;
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
};

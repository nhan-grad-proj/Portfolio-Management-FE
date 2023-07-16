export type CreateFeePayload = {
  date: string;
  fee: string;
  note: string;
};

export type CreateTransactionPayload = {
  ticket: string;
  operation: string;
  date: string;
  amount: string;
  price: string;
  fee: string;
  note: string;
};

export type Transaction = {
  id: string;
  created: string;
  modified: string;
  transaction_type: string;
  transaction_date: string;
  quantity: string;
  price: string;
  fee: string;
  notes: string;
  asset: string;
};

export type TransactionUsecase = {
  get(): Promise<Transaction[]>;
  createFee(payload: CreateFeePayload): Promise<void>;
  createTransaction(payload: CreateTransactionPayload): Promise<void>;
};

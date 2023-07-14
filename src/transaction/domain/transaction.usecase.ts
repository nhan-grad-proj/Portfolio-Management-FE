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

export type TransactionUsecase = {
  createFee(payload: CreateFeePayload): Promise<void>;
  createTransaction(payload: CreateTransactionPayload): Promise<void>;
};

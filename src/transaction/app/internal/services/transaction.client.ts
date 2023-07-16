import {
  CreateFeePayload,
  CreateTransactionPayload,
  Transaction,
  TransactionUsecase
} from '../../../domain/transaction.usecase';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const transactionClient: TransactionUsecase = {
  get(): Promise<Transaction[]> {
    return Promise.resolve([]);
  },
  createTransaction(payload: CreateTransactionPayload): Promise<void> {
    return authorizedHttpClient.request({
      method: 'post',
      data: payload,
      url: '/api/transactions/'
    });
  },
  createFee(payload: CreateFeePayload): Promise<void> {
    return authorizedHttpClient.request({
      method: 'post',
      data: payload,
      url: '/api/fees'
    });
  }
};

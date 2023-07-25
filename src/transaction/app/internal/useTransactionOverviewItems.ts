import { useQueryTransactions } from './useQueryTransactions';
import { TransactionColumn } from './app-models/transaction.model';
import { useMemo } from 'react';
import { formatCurrency } from '../../../system/app/internal/number.utils';

export function useTransactionOverviewItems(): TransactionColumn[] {
  const { transactions } = useQueryTransactions();

  return useMemo(() => {
    return transactions.map(transaction => {
      return {
        amount: transaction.quantity,
        date: transaction.transaction_date,
        fee: String(formatCurrency(+transaction.fee)),
        operation: transaction.transaction_type,
        price: String(formatCurrency(+transaction.price))
      };
    });
  }, [transactions]);
}

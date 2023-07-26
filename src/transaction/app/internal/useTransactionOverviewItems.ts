import { useQueryTransactions } from './useQueryTransactions';
import { TransactionColumn } from './app-models/transaction.model';
import { useMemo } from 'react';
import {
  formatCurrency,
  formatDecimal
} from '../../../system/app/internal/number.utils';

export function useTransactionOverviewItems(): TransactionColumn[] {
  const { transactions } = useQueryTransactions();

  return useMemo(() => {
    return transactions.map(transaction => {
      return {
        asset:
          transaction.asset_info.name + ' ' + transaction.asset_info.symbol,
        amount: formatDecimal(+transaction.quantity),
        date: transaction.transaction_date,
        fee: formatCurrency(+transaction.fee),
        operation: transaction.transaction_type,
        price: formatCurrency(+transaction.price)
      };
    });
  }, [transactions]);
}

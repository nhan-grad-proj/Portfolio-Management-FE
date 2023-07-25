import { useQuery } from 'react-query';
import { transactionClient } from './services/transaction.client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export function useQueryTransactions() {
  const { data } = useQuery('getAllTransactions', {
    queryFn: transactionClient.get
  });

  return {
    transactions: data ?? EMPTY_ARRAY
  };
}

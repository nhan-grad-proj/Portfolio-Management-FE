import { useMemo } from 'react';
import { Column } from 'react-table';
import { TransactionColumn } from './app-models/transaction.model';

export function useTransactionOverviewColumns(): Column<TransactionColumn>[] {
  return useMemo(() => {
    return [
      {
        Header: 'Operation',
        accessor: 'operation',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Holding',
        accessor: 'holding',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Date',
        accessor: 'date',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Price',
        accessor: 'price',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Fee',
        accessor: 'fee',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      }
    ];
  }, []);
}

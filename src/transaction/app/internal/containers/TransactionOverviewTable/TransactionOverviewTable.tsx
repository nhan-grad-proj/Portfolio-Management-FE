import { ReactElement } from 'react';
import { useTransactionOverviewColumns } from '../../useTransactionOverviewColumns';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { TransactionColumn } from '../../app-models/transaction.model';

export function TransactionOverviewTable(): ReactElement {
  const columns = useTransactionOverviewColumns();
  const items: TransactionColumn[] = [
    {
      holding: 'HKG',
      operation: 'BUY',
      date: '',
      amount: '',
      price: '',
      fee: ''
    },
    {
      holding: 'MLTT',
      operation: 'SOLD',
      date: '',
      amount: '',
      price: '',
      fee: ''
    }
  ];

  return (
    <div className="mt-6">
      <Table columns={columns} items={items} />
    </div>
  );
}

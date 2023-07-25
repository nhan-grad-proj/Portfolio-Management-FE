import { ReactElement } from 'react';
import { useTransactionOverviewColumns } from '../../useTransactionOverviewColumns';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { TransactionColumn } from '../../app-models/transaction.model';
import { useTransactionOverviewItems } from '../../useTransactionOverviewItems';

export function TransactionOverviewTable(): ReactElement {
  const columns = useTransactionOverviewColumns();
  const items: TransactionColumn[] = useTransactionOverviewItems();

  return (
    <div className="mt-6">
      <Table columns={columns} items={items} />
    </div>
  );
}

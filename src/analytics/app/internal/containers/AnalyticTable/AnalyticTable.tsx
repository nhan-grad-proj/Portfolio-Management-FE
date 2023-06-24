import { ReactElement } from 'react';
import { useAnalyticColumns } from '../../useAnalyticColumns';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { Card, CardBody } from '@chakra-ui/react';
import { AnalyticColumn } from '../../app-models/analytic.model';

export function AnalyticTable(): ReactElement {
  const columns = useAnalyticColumns();
  const items: AnalyticColumn[] = [
    { holdings: 'HKG', amount: '100' },
    { holdings: 'MLTT', amount: '200' }
  ];

  return (
    <Card>
      <CardBody>
        <Table columns={columns} items={items} />
      </CardBody>
    </Card>
  );
}

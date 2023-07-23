import { ReactElement } from 'react';
import { useAnalyticColumns } from '../../useAnalyticColumns';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { Card, CardBody } from '@chakra-ui/react';
import { useAssetOverviewItems } from '../../useAssetOverviewItems';

export function AnalyticTable(): ReactElement {
  const columns = useAnalyticColumns();
  const items = useAssetOverviewItems();

  return (
    <Card>
      <CardBody>
        <Table columns={columns} items={items} />
      </CardBody>
    </Card>
  );
}

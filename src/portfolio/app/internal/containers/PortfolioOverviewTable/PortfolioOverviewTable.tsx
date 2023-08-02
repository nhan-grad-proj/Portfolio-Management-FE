import { ReactElement } from 'react';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { PortfolioOverviewColumn } from '../../app-models/portfolio.model';
import { usePortfolioOverviewItems } from '../../usePortfolioOverviewItems';
import { usePortfolioOverviewColumns } from '../../usePortfolioOverviewColumns';
import { useIsFetching } from 'react-query';
import { QUERY_MY_PORTFOLIOS_KEY } from '../../useQueryMyPortfolios';

export function PortfolioOverviewTable(): ReactElement {
  const columns = usePortfolioOverviewColumns();
  const items: PortfolioOverviewColumn[] = usePortfolioOverviewItems();
  const isLoading = useIsFetching(QUERY_MY_PORTFOLIOS_KEY) > 0;

  return (
    <div className="mt-6">
      <Table columns={columns} items={items} isLoading={isLoading} />
    </div>
  );
}

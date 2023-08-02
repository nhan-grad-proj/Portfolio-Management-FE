import { useMemo } from 'react';
import { PortfolioOverviewColumn } from './app-models/portfolio.model';
import { useQueryMyPortfolios } from './useQueryMyPortfolios';
import { formatDate } from 'src/system/app/internal/date.utilts';

export function usePortfolioOverviewItems(): PortfolioOverviewColumn[] {
  const { portfolios } = useQueryMyPortfolios();

  return useMemo(() => {
    return portfolios.map(portfolio => {
      return {
        name: portfolio.name,
        description: portfolio.description,
        createdAt: formatDate(new Date(portfolio.created_at)),
        action: portfolio.id
      };
    });
  }, [portfolios]);
}

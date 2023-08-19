import { useQuery } from 'react-query';
import { portfolioClient } from './services/portfolio-client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export function useQueryHistoryPortfolio(portfolioId: number) {
  const { data } = useQuery(['useQueryHistoryPortfolio', portfolioId], {
    queryFn: () => portfolioClient.getPortfolioHistory(portfolioId),
    enabled: !isNaN(portfolioId)
  });

  return {
    histories: data ?? EMPTY_ARRAY
  };
}

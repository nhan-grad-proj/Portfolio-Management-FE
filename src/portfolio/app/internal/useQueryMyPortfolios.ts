import { useQuery } from 'react-query';
import { portfolioClient } from './services/portfolio-client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export function useQueryMyPortfolios() {
  const { data, isSuccess } = useQuery('useQueryMyPortfolios', {
    queryFn: portfolioClient.getAll
  });

  return {
    portfolios: data ?? EMPTY_ARRAY,
    isSuccess
  };
}

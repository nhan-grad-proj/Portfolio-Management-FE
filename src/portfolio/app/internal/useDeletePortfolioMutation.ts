import { useMutation } from 'react-query';
import { portfolioClient } from './services/portfolio-client';

export function useDeletePortfolioMutation(id: number) {
  const { mutate } = useMutation('deletePortfolio', {
    mutationFn: () => portfolioClient.deleteOne(id)
  });

  return {
    deletePortfolioById: mutate
  };
}

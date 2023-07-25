import { useMemo } from 'react';
import { AnalyticColumn } from './app-models/analytic.model';
import { EMPTY_ARRAY } from '../../../system/domain/constants';
import { useCurrentPortfolioDetail } from '../../../portfolio/app/internal/useCurrentPortfolioDetail';

export function useAssetOverviewItems(): AnalyticColumn[] {
  const { portfolio } = useCurrentPortfolioDetail();

  return useMemo(() => {
    if (!portfolio) return EMPTY_ARRAY;

    return portfolio.assets.map(item => {
      return {
        id: item.id,
        currentPrice: item.current_price,
        name: item.name,
        portfolio: item.portfolio,
        purchaseDate: item.purchase_date,
        purchasePrice: item.purchase_price,
        quantity: item.quantity,
        sumFee: item.sum_fee,
        tickerSymbol: item.ticker_symbol
      };
    });
  }, [portfolio]);
}

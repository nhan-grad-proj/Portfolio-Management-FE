import { useMemo } from 'react';
import { AnalyticColumn } from './app-models/analytic.model';
import { useQueryPortfolioDetail } from '../../../portfolio/app/internal/useQueryPortfolioDetail';
import { useSelector } from 'react-redux';
import { selectedPortfolioId } from '../../../system/app/internal/system.store';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export function useAssetOverviewItems(): AnalyticColumn[] {
  const portfolioId = useSelector(selectedPortfolioId);
  const { portfolio } = useQueryPortfolioDetail(portfolioId ?? NaN);

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

import { useQueryAssetOverview } from '../../../assets/app/internal/useQueryAssetOverview';
import { useMemo } from 'react';
import { AnalyticColumn } from './app-models/analytic.model';

export function useAssetOverviewItems(): AnalyticColumn[] {
  const { assetOverviewItems } = useQueryAssetOverview();

  return useMemo(() => {
    return assetOverviewItems.map(item => {
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
  }, [assetOverviewItems]);
}

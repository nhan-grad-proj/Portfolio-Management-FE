import { ChartData } from 'chart.js';
import { useMemo } from 'react';
import { useQueryPortfolioDetail } from '../../../portfolio/app/internal/useQueryPortfolioDetail';
import { useCurrentPortfolioDetail } from '../../../portfolio/app/internal/useCurrentPortfolioDetail';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function useAnalyticChart(): ChartData<'doughnut', number[], string> {
  const { portfolio } = useCurrentPortfolioDetail();

  return useMemo(() => {
    let labels: string[] = [];
    let data: number[] = [];
    let colors: string[] = [];

    portfolio?.assets.forEach(asset => {
      data.push(parseFloat(asset.purchase_price) * Number(asset.quantity));
      labels.push(asset.ticker_symbol);
      colors.push(getRandomColor());
    });

    return {
      labels,
      datasets: [
        {
          label: 'All Holdings',
          data,
          backgroundColor: colors,
          hoverOffset: 4
        }
      ]
    };
  }, [portfolio?.assets]);
}

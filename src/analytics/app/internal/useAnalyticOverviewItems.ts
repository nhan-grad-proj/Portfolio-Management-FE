import { OverviewCardProps } from './ui/OverviewCard/types';
import { useQuery } from 'react-query';
import { analyticClient } from './services/analytic-client';
import { useMemo } from 'react';

type AnalyticOverviewItemPropsAdapter = (OverviewCardProps & { key: string })[];

export function useAnalyticOverviewItems(): AnalyticOverviewItemPropsAdapter {
  const { data } = useQuery('analyticOverviewItems', {
    queryFn: analyticClient.getInvestmentAnalysisResults
  });

  return useMemo(() => {
    const { totalValue = '', totalProfit = '', IRR = '' } = data ?? {};

    return [
      {
        key: 'Overview',
        title: 'Value',
        mainContent: '$146,102.16',
        description: '$127,533.71 invested'
      },
      {
        key: 'Total profit',
        title: 'Total profit',
        mainContent: '+$32,010.89 25.1%',
        description: '-$639.47 0.43% daily'
      },
      {
        key: 'IRR',
        title: 'IRR',
        mainContent: '10.43%',
        description: '6.31%current holdings'
      }
    ];
  }, [data]);
}

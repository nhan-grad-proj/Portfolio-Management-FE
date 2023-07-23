import { OverviewCardProps } from './ui/OverviewCard/types';
import { useQuery } from 'react-query';
import { analyticClient } from './services/analytic-client';
import { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSuitcase,
  faChartLine,
  faMoneyCheckDollar
} from '@fortawesome/free-solid-svg-icons';
import { formatCurrency } from '../../../system/app/internal/number.utils';

type AnalyticOverviewItemPropsAdapter = (OverviewCardProps & { key: string })[];

export function useAnalyticOverviewItems(
  portfolioId: number
): AnalyticOverviewItemPropsAdapter {
  const { data } = useQuery('analyticOverviewItems', {
    queryFn: () => analyticClient.getInvestmentAnalysisResults(portfolioId),
    enabled: !isNaN(portfolioId)
  });

  return useMemo(() => {
    const {
      total_profit = 0,
      total_value = 0,
      total_invested = 0,
      best_performer,
      worst_performer
    } = data ?? {};

    return [
      {
        key: 'Overview',
        title: (
          <>
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="ml-2">Value</span>
          </>
        ),
        mainContent: '$' + formatCurrency(total_value),
        description: '$' + formatCurrency(total_invested)
      },
      {
        key: 'Total profit',
        title: (
          <>
            <FontAwesomeIcon icon={faChartLine} />
            <span className="ml-2">Total profit</span>
          </>
        ),
        mainContent: '$' + formatCurrency(total_profit),
        description: (total_value / total_invested - 1) * 100 + '%'
      },
      {
        key: 'Best performer',
        title: (
          <>
            <FontAwesomeIcon icon={faMoneyCheckDollar} />
            <span className="ml-2">Best performer</span>
          </>
        ),
        mainContent:
          '$' + formatCurrency(best_performer?.gained_amount_in_usd ?? 0),
        description: String(best_performer?.percentage ?? 0) + '%'
      },
      {
        key: 'Worst performer',
        title: (
          <>
            <FontAwesomeIcon icon={faMoneyCheckDollar} />
            <span className="ml-2">Worst performer</span>
          </>
        ),
        mainContent:
          '$' + formatCurrency(worst_performer?.gained_amount_in_usd ?? 0),
        description: String(worst_performer?.percentage ?? 0) + '%'
      }
    ];
  }, [data]);
}

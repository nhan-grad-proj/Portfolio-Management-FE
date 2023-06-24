import { OverviewCardProps } from './ui/OverviewCard/types';

type AnalyticOverviewItemPropsAdapter = (OverviewCardProps & { key: string })[];

export function useAnalyticOverviewItems(): AnalyticOverviewItemPropsAdapter {
  return [
    {
      key: 'Overview',
      title: 'Overview',
      mainContent: 'Main Content',
      description: 'Description'
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
}

import { ReactElement } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { OverviewCard } from '../../ui/OverviewCard/OverviewCard';
import { useAnalyticOverviewItems } from '../../useAnalyticOverviewItems';
import { useSelector } from 'react-redux';
import { selectedPortfolioSelector } from '../../../../../system/app/internal/system.store';

export function OverviewAnalyticsPanel(): ReactElement {
  const selectedPortfolio = useSelector(selectedPortfolioSelector);
  const items = useAnalyticOverviewItems(selectedPortfolio?.id ?? NaN);

  return (
    <Grid
      marginTop={'4'}
      templateColumns={`repeat(${items.length}, 1fr)`}
      className="space-x-4"
    >
      {items.map(({ key, ...item }) => {
        return (
          <GridItem key={key}>
            <OverviewCard {...item} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

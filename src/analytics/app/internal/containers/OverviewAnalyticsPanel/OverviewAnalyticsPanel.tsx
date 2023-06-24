import { ReactElement } from 'react';
import { HStack } from '@chakra-ui/react';
import { OverviewCard } from '../../ui/OverviewCard/OverviewCard';
import { useAnalyticOverviewItems } from '../../useAnalyticOverviewItems';

export function OverviewAnalyticsPanel(): ReactElement {
  const items = useAnalyticOverviewItems();

  return (
    <HStack marginTop="6" spacing="6">
      {items.map(({ key, ...item }) => {
        return <OverviewCard {...item} key={key} />;
      })}
    </HStack>
  );
}

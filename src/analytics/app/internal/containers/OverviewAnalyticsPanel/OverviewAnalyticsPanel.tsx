import { ReactElement } from 'react';
import { HStack } from '@chakra-ui/react';
import { OverviewCard } from '../../ui/OverviewCard/OverviewCard';

export function OverviewAnalyticsPanel(): ReactElement {
  return (
    <HStack marginTop="6" spacing="6">
      <OverviewCard
        title={'Value'}
        mainContent={'$147,253.32'}
        description={'$127,544.31 invested'}
      />

      <OverviewCard
        title={'Total profit'}
        mainContent={'+$32,010.89 25.1%'}
        description={'-$639.47 0.43% daily'}
      />

      <OverviewCard
        title={'IRR'}
        mainContent={'10.43%'}
        description={'6.31%current holdings'}
      />
    </HStack>
  );
}

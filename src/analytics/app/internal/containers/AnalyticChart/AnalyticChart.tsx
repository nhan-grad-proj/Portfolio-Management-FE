import { ReactElement } from 'react';
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Card, CardBody, Text } from '@chakra-ui/react';
import { AssetChart } from './AssetChart/AssetChart';

ChartJS.register(ArcElement, Tooltip);

export function AnalyticChart(): ReactElement {
  return (
    <>
      <Text fontSize="2xl" fontWeight="bold">
        Assets
      </Text>

      <Card>
        <CardBody className="space-y-8 m-6">
          <AssetChart />
        </CardBody>
      </Card>
    </>
  );
}

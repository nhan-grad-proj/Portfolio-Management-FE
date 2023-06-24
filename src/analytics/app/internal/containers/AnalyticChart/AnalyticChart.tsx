import { ReactElement } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Heading, Card, Flex, CardBody } from '@chakra-ui/react';
import { useAnalyticChart } from '../../useAnalyticChart';

ChartJS.register(ArcElement, Tooltip, Legend);

export function AnalyticChart(): ReactElement {
  const data = useAnalyticChart();

  return (
    <Card className="space-y-4">
      <CardBody>
        <Heading fontSize="xl">{'All holdings'}</Heading>

        <Flex>
          <Box height={350} width={'auto'} className="flex-1">
            <Doughnut data={data} />
          </Box>

          <Box className="flex-auto">USD</Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

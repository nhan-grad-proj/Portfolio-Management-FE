import { ReactElement, useMemo } from 'react';
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Progress
} from '@chakra-ui/react';
import { useAnalyticChart } from '../../useAnalyticChart';
import { computeChartDescriptors } from '../../services/chart-computer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(ArcElement, Tooltip);

export function AnalyticChart(): ReactElement {
  const data = useAnalyticChart();
  const descriptors = useMemo(() => computeChartDescriptors(data), [data]);

  return (
    <Card className="space-y-4">
      <CardBody>
        <Heading fontSize="xl">{'All holdings'}</Heading>

        <Grid templateColumns="repeat(2, 1fr)" alignItems="center">
          <GridItem height={350} width="auto">
            <Doughnut data={data} />
          </GridItem>

          <GridItem>
            {descriptors.map(({ label, percentage, color }) => {
              return (
                <Grid
                  key={label}
                  templateColumns="repeat(2, 1fr)"
                  alignItems={'center'}
                >
                  <GridItem>
                    <FontAwesomeIcon icon={faCircle} color={color} />
                    <span className="ml-2">{label}</span>
                  </GridItem>

                  <GridItem>
                    <Grid key={label} templateColumns="repeat(4, 1fr)">
                      <GridItem colSpan={1}>
                        <div>{percentage} %</div>
                      </GridItem>

                      <GridItem colSpan={3}>
                        <Progress value={percentage} className="w-full" />
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
              );
            })}
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}

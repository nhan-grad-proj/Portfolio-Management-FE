import { ReactElement, useMemo } from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { Card, CardBody, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { useQueryHistoryPortfolio } from '../../../../../portfolio/app/internal/useQueryHistoryPortfolio';
import { useSelector } from 'react-redux';
import { selectedPortfolioId } from '../../../../../system/app/internal/system.store';
import { SYSTEM_COLORS } from '../../../../../system/infrastructure/config/chakra-ui.config';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'History portfolio'
    }
  }
};

export function HistoryPortfolioChart(): ReactElement {
  const portfolioId = useSelector(selectedPortfolioId);

  const { histories } = useQueryHistoryPortfolio(portfolioId ?? NaN);

  const data = useMemo(() => {
    const m = histories.map(history => history.total_invested);

    return {
      labels: histories.map(history => history.date),
      datasets: [
        {
          fill: true,
          label: 'Total invested',
          data: m,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)'
        },
        {
          fill: true,
          label: 'Total value',
          data: histories.map(history => history.total_value),
          borderColor: SYSTEM_COLORS.success,
          backgroundColor: SYSTEM_COLORS.success
        }
      ]
    };
  }, [histories]);

  return (
    <>
      <Text fontSize="2xl" fontWeight="bold">
        History Portfolio
      </Text>

      <Card>
        <CardBody className="space-y-8 m-6">
          <Line options={options} data={data} />
        </CardBody>
      </Card>
    </>
  );
}

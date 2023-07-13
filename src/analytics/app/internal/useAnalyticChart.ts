import { ChartData } from 'chart.js';
import { useMemo } from 'react';

export function useAnalyticChart(): ChartData<'doughnut', number[], string> {
  return useMemo(() => {
    return {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(105, 48, 195)',
            'rgb(42, 203, 203)',
            'rgb(78, 168, 222)'
          ],
          hoverOffset: 4
        }
      ]
    };
  }, []);
}

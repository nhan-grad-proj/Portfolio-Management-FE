import { useMemo } from 'react';
import { Column } from 'react-table';
import { AnalyticColumn } from './app-models/analytic.model';

export function useAnalyticColumns(): Column<AnalyticColumn>[] {
  return useMemo(() => {
    return [
      {
        Header: 'Holdings',
        accessor: 'holdings',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      }
    ];
  }, []);
}

import * as React from 'react';
import type { NextPage } from 'next';
import { OverviewAnalyticsPanel } from '../src/analytics/app/internal/containers/OverviewAnalyticsPanel/OverviewAnalyticsPanel';

const AnalyticsPage: NextPage = () => {
  return (
    <>
      <OverviewAnalyticsPanel />
    </>
  );
};

export default AnalyticsPage;

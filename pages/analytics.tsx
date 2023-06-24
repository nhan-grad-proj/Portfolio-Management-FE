import * as React from 'react';
import type { NextPage } from 'next';
import { OverviewAnalyticsPanel } from '../src/analytics/app/internal/containers/OverviewAnalyticsPanel/OverviewAnalyticsPanel';
import { AnalyticTable } from '../src/analytics/app/internal/containers/AnalyticTable/AnalyticTable';
import { AnalyticChart } from '../src/analytics/app/internal/containers/AnalyticChart/AnalyticChart';

const AnalyticsPage: NextPage = () => {
  return (
    <div className="space-y-4">
      <OverviewAnalyticsPanel />
      <AnalyticTable />
      <AnalyticChart />
    </div>
  );
};

export default AnalyticsPage;

import React from 'react';
import { NextPageWithLayout } from 'src/system/infrastructure/next.types';
import { NoLayout } from 'src/system/app/internal/ui/NoLayout/NoLayout';

const MaintenancePage: NextPageWithLayout = (): React.ReactElement => (
  <>System maintenance</>
);

MaintenancePage.getLayout = NoLayout;

export default MaintenancePage;

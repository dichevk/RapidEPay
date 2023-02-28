import { ReactElement } from 'react';
import { DashboardLayout } from '@/components/layouts/Dashboard';
import { NextPageWithLayout } from '../../types';

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <div>dashboard</div>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
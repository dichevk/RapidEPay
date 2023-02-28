import { FC, PropsWithChildren } from 'react';
import { NavigationSidebar } from '../sidebar/Sidebar';
import styles from './index.module.scss';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layout}>
    <NavigationSidebar />
    <main className={styles.main}>{children}</main>
  </div>
);
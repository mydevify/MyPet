import React, { ReactNode } from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Dnavbar from '../ui/dashboard/d-navbar/dnavbar';
import styles from './dashboard.module.css'
import Footer from '../ui/dashboard/footer/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container} >
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Dnavbar />
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;

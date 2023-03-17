import { Outlet } from 'react-router-dom';

import { Navbar } from '../NavBar/NavBar';

import styles from 'components/Layout/Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

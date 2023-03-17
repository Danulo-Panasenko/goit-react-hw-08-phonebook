import { NavLink } from 'react-router-dom';

import styles from './NavbarAuth.module.css';

export const NavbarAuth = () => {
  return (
    <div className={styles.navbarAuth}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

import styles from './NavbarUser.module.css';

export const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.navbarUser}>
      <p className={styles.email}>{email}</p>
      <button className={styles.button} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

import { useSelector } from 'react-redux';

import { NavbarAuth } from './NavbarAuth/NavbarAuth';
import { NavbarUser } from './NavbarUser/NavbarUser';

import { isUserLogin } from 'redux/auth/authSelectors';

export const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

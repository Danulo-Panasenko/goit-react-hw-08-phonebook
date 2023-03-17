import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loader } from 'components/Loader/Loader';

import { selectAuth } from 'redux/auth/authSelectors';

export const PublicRoute = () => {
  const { isLogin, token } = useSelector(selectAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

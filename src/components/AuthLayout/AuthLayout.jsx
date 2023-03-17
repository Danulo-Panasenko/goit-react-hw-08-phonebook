import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrent } from 'redux/auth/authOperations';

export const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return <>{children}</>;
};

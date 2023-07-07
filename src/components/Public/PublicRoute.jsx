import { useSelector } from 'react-redux';
import { selectToken } from 'redux/user/userSelect';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return token ? (
    <Navigate to={location.state?.from ?? '/contacts'} />
  ) : (
    <Outlet />
  );
};

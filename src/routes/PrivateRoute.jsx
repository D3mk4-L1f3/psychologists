/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLogged = useSelector(selectIsLoggedIn);

  if (isLogged) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;

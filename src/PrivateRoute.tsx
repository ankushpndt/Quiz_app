import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Contexts/AuthContext';
type PrivateRouteType = {
  path: string;
  element: any;
};
export const PrivateRoute = ({ path, ...props }: PrivateRouteType) => {
  const { login } = useAuth();
  return login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to='/' />
  );
};

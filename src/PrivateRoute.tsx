import { Navigate } from 'react-router-dom';
import { useAuth } from './Contexts/AuthContext';
type PrivateRouteType = {
  children: any;
};
export const PrivateRoute = ({ children }: PrivateRouteType) => {
  const { login } = useAuth();

  return login ? children : <Navigate to='/login' />;
};

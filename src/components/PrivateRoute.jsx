import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  // Si no está logueado redirigimos al login
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

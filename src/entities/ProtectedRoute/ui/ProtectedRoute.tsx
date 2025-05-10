import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from 'app/store/store';

interface ProtectedRouteProps {
    element: JSX.Element;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
    // для отключения защищенного пути ЛК token = true
    // const token = useSelector((state: RootState) => state.auth.token);
    const token = true;
    return token ? element : <Navigate to="/" replace />;
};

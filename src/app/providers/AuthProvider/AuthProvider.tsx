import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store/store';
import { logout } from 'features/auth/model/authSlice';
import { isTokenExpired, decodeToken } from 'features/auth/model/authUtils';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (token && isTokenExpired(token)) {
            dispatch(logout());
        } else if (token) {
            const payload = decodeToken(token);
            const timeToExpire = payload.exp * 1000 - Date.now();

            const timer = setTimeout(() => {
                dispatch(logout());
            }, timeToExpire);

            return () => clearTimeout(timer);
        }
    }, [token, dispatch]);

    return <>{children}</>;
};

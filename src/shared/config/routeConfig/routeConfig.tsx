import { RouteProps } from 'react-router-dom';
import { ProtectedRoute } from 'entities/ProtectedRoute';
import { ExchangePage } from 'pages/ExchangePage';
import { ContactsPage } from 'pages/ContactsPage';
import { MainPage } from 'pages/MainPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { ForgotPasswordPage } from 'pages/ForgotPasswordPage';
import { ClientsPage } from 'pages/ClientsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { lazy } from 'react';

export enum AppRoutes {
    MAIN = 'main',
    ATMS = 'atms',
    EXCHANGE = 'exchange',
    CONTACTS = 'contacts',
    REGISTRATION = 'registration',
    FORGOT_PASSWORD = 'forgot_password',
    CLIENTS = 'clients',
    NOT_FOUNT = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ATMS]: '/atms',
    [AppRoutes.EXCHANGE]: '/exchange',
    [AppRoutes.CONTACTS]: '/contacts',
    [AppRoutes.REGISTRATION]: '/registration',
    [AppRoutes.FORGOT_PASSWORD]: '/forgot-password',
    [AppRoutes.CLIENTS]: '/clients',
    [AppRoutes.NOT_FOUNT]: '*',
};

const AtmsPage = lazy(() => import('pages/AtmsPage'));

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ATMS]: {
        path: RoutePath.atms,
        element: <AtmsPage />,
    },
    [AppRoutes.EXCHANGE]: {
        path: RoutePath.exchange,
        element: <ExchangePage />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPage />,
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <RegistrationPage />,
    },
    [AppRoutes.FORGOT_PASSWORD]: {
        path: RoutePath.forgot_password,
        element: <ForgotPasswordPage />,
    },
    [AppRoutes.CLIENTS]: {
        path: RoutePath.clients,
        element: <ProtectedRoute element={<ClientsPage />} />,
    },
    [AppRoutes.NOT_FOUNT]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import AtmsPage from 'pages/AtmsPage';
import { ExchangePage } from 'pages/ExchangePage';
import { ContactsPage } from 'pages/ContactsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { routeConfig, RoutePath } from './routeConfig';

describe('Route configuration', () => {
    test('RoutePath match expected path', () => {
        expect(RoutePath.main).toBe('/');
        expect(RoutePath.atms).toBe('/atms');
        expect(RoutePath.exchange).toBe('/exchange');
        expect(RoutePath.contacts).toBe('/contacts');
        expect(RoutePath.not_found).toBe('*');
    });

    test('Render correct components for each route', () => {
        const testCases = [
            { path: RoutePath.main },
            { path: RoutePath.atms },
            { path: RoutePath.exchange },
            { path: RoutePath.contacts },
            { path: RoutePath.not_found },
        ];

        testCases.forEach(({ path }) => {
            <MemoryRouter initialEntries={[path]}>
                <Routes>
                    <Route
                        path={routeConfig.main.path}
                        element={<MainPage />}
                    />
                    <Route
                        path={routeConfig.atms.path}
                        element={<AtmsPage />}
                    />
                    <Route
                        path={routeConfig.exchange.path}
                        element={<ExchangePage />}
                    />
                    <Route
                        path={routeConfig.contacts.path}
                        element={<ContactsPage />}
                    />
                    <Route
                        path={routeConfig.not_found.path}
                        element={<NotFoundPage />}
                    />
                </Routes>
            </MemoryRouter>;
        });
    });
});

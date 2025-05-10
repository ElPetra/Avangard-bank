import { Suspense } from 'react';
import { NavbarSwitcher } from 'widgets/NavbarSwitcher';
import { AuthProvider } from './providers/AuthProvider/AuthProvider';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
    return (
        <AuthProvider>
            <div className="app">
                <Suspense fallback="">
                    <NavbarSwitcher />
                    <AppRouter />
                </Suspense>
            </div>
        </AuthProvider>
    );
};

export default App;

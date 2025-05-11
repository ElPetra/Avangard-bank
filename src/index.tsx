import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from 'app/providers/ErrorBoundary/ErrorBoundary';
import App from 'app/App';
import { store } from './app/store/store';
import './shared/config/i18n/i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <Provider store={store}>
        <BrowserRouter basename="/Avangard-bank">
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>,
);

import { lazy } from 'react';

export const ExchangePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ExchangePage')), 1500);
        }),
);

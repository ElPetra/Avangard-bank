import { lazy } from 'react';

export const AtmsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./AtmsPage')), 1500);
        }),
);

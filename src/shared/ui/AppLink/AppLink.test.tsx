import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppLink } from './AppLink';

describe('AppLink', () => {
    const renderWithRouter = (ui: React.ReactElement) => {
        return render(<BrowserRouter>{ui}</BrowserRouter>);
    };

    test('Test render Applink with children', () => {
        renderWithRouter(<AppLink to="/home">Home</AppLink>);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    test('has correct "to" prop', () => {
        renderWithRouter(<AppLink to="/home">Home</AppLink>);
        const linkElement = screen.getByText('Home') as HTMLAnchorElement;
        expect(linkElement.getAttribute('href')).toBe('/home');
    });
});

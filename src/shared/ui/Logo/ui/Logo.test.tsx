import { render, screen } from '@testing-library/react';
import { Logo } from '..';

describe('Logo', () => {
    test('Correct render in the document', () => {
        render(<Logo />);
        expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    test('Component is a SVG', () => {
        render(<Logo />);
        const logoElement = screen.getByTestId('logo');
        expect(logoElement.tagName).toBe('svg');
    });
});

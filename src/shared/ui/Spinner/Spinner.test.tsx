import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    test('Render correct in the document', () => {
        render(<Spinner />);
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    test('Component is a SVG', () => {
        render(<Spinner />);
        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement.tagName).toBe('svg');
    });
});

import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text component', () => {
    test('renders without crashing', () => {
        render(<Text>Test text</Text>);
        const textElement = screen.getByText(/Test text/i);
        expect(textElement).toBeInTheDocument();
    });

    test('renders with the correct HTML tag', () => {
        render(<Text tag="h1">Heading Text</Text>);
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement).toBeInTheDocument();
    });

    test('applies custom class names', () => {
        render(<Text className="custom-class">Custom Class Text</Text>);
        const textElement = screen.getByText(/Custom Class Text/i);
        expect(textElement).toHaveClass('custom-class');
    });
});

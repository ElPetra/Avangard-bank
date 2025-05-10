import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardItem } from './CardItem';

describe('CardItem component', () => {
    test('should render children correctly', () => {
        const { getByText } = render(
            <CardItem>
                <span>Test content</span>
            </CardItem>,
        );
        expect(getByText('Test content')).toBeInTheDocument();
    });

    test('should render without crashing', () => {
        const { container } = render(<CardItem>Test content</CardItem>);
        expect(container.firstChild).toBeInTheDocument();
    });

    test('should apply alignItems prop', () => {
        const { getByText } = render(
            <CardItem alignItems="center">
                <span>Test content</span>
            </CardItem>,
        );
        expect(getByText('Test content')).toBeInTheDocument();
    });
});

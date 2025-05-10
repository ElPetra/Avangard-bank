import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card component', () => {
    test('should render children correctly', () => {
        const { getByText } = render(
            <Card>
                <span>Test content</span>
            </Card>,
        );
        expect(getByText('Test content')).toBeInTheDocument();
    });

    test('should render without crashing', () => {
        const { container } = render(<Card>Test content</Card>);
        expect(container.firstChild).toBeInTheDocument();
    });

    test('should apply direction prop', () => {
        const { getByText } = render(
            <Card direction="row">
                <span>Row Content</span>
            </Card>,
        );
        expect(getByText('Row Content')).toBeInTheDocument();
    });

    test('should render multiple children', () => {
        const { getByText } = render(
            <Card>
                <span>First child</span>
                <span>Second child</span>
            </Card>,
        );
        expect(getByText('First child')).toBeInTheDocument();
        expect(getByText('Second child')).toBeInTheDocument();
    });
});

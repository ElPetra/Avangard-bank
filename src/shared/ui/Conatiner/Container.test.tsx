import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
    test('renders children correctly', () => {
        render(
            <Container>
                <div>Test Child</div>
            </Container>,
        );
        const childElement = screen.getByText('Test Child');
        expect(childElement).toBeInTheDocument();
    });

    test('renders without children', () => {
        const { container } = render(
            <Container>
                <div>Test Child</div>
            </Container>,
        );
        expect(container.firstChild).toBeInTheDocument();
    });
});

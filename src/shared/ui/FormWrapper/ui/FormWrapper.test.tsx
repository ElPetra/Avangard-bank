import { render, screen } from '@testing-library/react';
import { FormWrapper } from './FormWrapper';

describe('FormWrapper', () => {
    test('should render children correctly', () => {
        render(
            <FormWrapper>
                <p>Test content</p>
            </FormWrapper>,
        );
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    test('should apply additional className if passed', () => {
        const additionalClass = 'test-class';
        const { container } = render(
            <FormWrapper className={additionalClass}>
                <p>Test content</p>
            </FormWrapper>,
        );
        expect(container.firstChild).toHaveClass('test-class');
    });
});
